---
title: Real-time (Socket.io)
sidebar_position: 4
description: Socket authentication, rooms, presence, chat events and server-pushed notifications.
---

# Real-time (Socket.io)

`utils/socket.js` attaches Socket.io to the HTTP server created in `server.js`. nginx forwards `/socket.io/` with WebSocket upgrade headers. Online presence is stored in a Redis hash, so it survives restarts.

:::caution Scaling beyond one instance
pm2 runs the API in cluster mode with **`instances: 1`**. `@socket.io/redis-adapter` is installed but **not wired up**, so room broadcasts only reach sockets on the same process. Before raising the instance count, attach the Redis adapter (`io.adapter(createAdapter(pub, sub))`) and enable sticky sessions in nginx.
:::

## Connection & auth

1. The client connects with credentials, so the `accessToken` cookie travels on the handshake.
2. The server parses the cookie, verifies the JWT, and runs the same session checks as `authMiddleware` (blacklist, revoked, expired, owner).
3. On success the socket joins:
   - `user:<userId>`: personal room for notifications and direct delivery,
   - `users` or `admins`: broadcast rooms.
4. Online status is tracked in Redis. Chat partners get `user_online`, and on the last disconnect `user_offline` plus `user_last_seen_updated`.

## Rooms

| Room | Joined when | Used for |
| --- | --- | --- |
| `user:<id>` | on connect | `notification`, `receive_message` fallback, `messages_read` |
| `conv:<conversationId>` | `join_conversation` (participants only) | `receive_message`, typing indicators |
| `users` / `admins` | on connect, by role | broadcast notifications |

## Events

| Direction | Event | Payload / behaviour |
| --- | --- | --- |
| C → S | `join_conversation` `{ conversationId }` | Checks participation, otherwise `chat_error` |
| C → S | `leave_conversation` | |
| C → S | `send_message` | Zod-validated. Persists a `Message`, emits `receive_message` to the conversation room and the receiver's user room. |
| C → S | `mark_read` `{ conversationId }` | Marks messages `READ`, emits `messages_read` to the sender |
| C → S | `typing_start` / `typing_stop` | Relayed as `user_typing` / `user_stop_typing` |
| C → S | `get_online_status` `{ userId }`, ack | Returns online state and last seen |
| S → C | `notification` | Pushed by `sendNotificationToUser`, `…ToAdmins`, `…ToAllUsers` helpers |
| S → C | `chat_error` | Validation or permission failure |

Conversation **creation** rules (who may start a thread, per-plan limits) are enforced by the REST endpoint `POST /conversation/start`. See [Messaging](/features/messaging).
