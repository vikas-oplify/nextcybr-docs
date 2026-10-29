---
title: Errors & validation
sidebar_position: 7
description: Response shapes, CustomError, Zod validation and how the global error handler maps errors to status codes.
---

# Errors & validation

## Response shapes

```json title="Success"
{ "success": true, "message": "Optional human message", "data": { } }
```

```json title="Error"
{
  "success": false,
  "message": "Please enter a valid email address.",
  "errors": [{ "field": "email", "message": "Please enter a valid email address." }]
}
```

`errors[]` is only present for validation failures. In development (`devEnvironment`), 5xx responses also include `stack`.

## Writing a controller

```js
import { tryCatchBlockHandler } from "../../middlewares/tryCatchBlockHandler.js";
import CustomError from "../../utils/CustomError.js";
import { statusCodes } from "../../constants/statusCodes.js";

export const getThing = tryCatchBlockHandler(async (req, res, next) => {
  const thing = await prisma.thing.findUnique({ where: { id: req.query.id } });
  if (!thing) return next(new CustomError("Thing not found.", statusCodes.notFound));
  res.status(statusCodes.ok).json({ success: true, data: thing });
});
```

- Wrap async handlers in `tryCatchBlockHandler` so thrown errors reach the error handler.
- Raise user-facing errors as `new CustomError(message, status, details?)`. The message is shown to users as-is, and `details` (an object) is merged into the response.

## Validation

Route-level Zod validation keeps controllers free of shape checks:

```js
router.post("/recruiter-notes", authMiddleware, authorizeRoles("COMPANY"),
  validateRequest(recruiterNoteSchema), createRecruiterNote);

router.post("/services/webinar/register", authMiddleware, authorizeRoles("STUDENT"),
  webinarRegisterLimiter, validateRequest(webinarServiceIdQuerySchema, "query"), registerWebinar);
```

Schemas live next to their module (`*.schema.js`) or in `src/validations/`. Shared messages are in `utils/zodMessages.js`. Business rules that need the database (e.g. "is this reason custom?") stay in the controller.

## Global error handler

`middlewares/errorHandler.js` maps errors in this order:

| Error | Status | Message |
| --- | --- | --- |
| `CustomError` | its `statusCode` | its message (+ `details`) |
| `ZodError` | 400 | first issue + `errors[]` |
| Prisma `P2025` | 404 | "Record not found." |
| Prisma `P2023`, `PrismaClientValidationError` | 400 | "Invalid or missing request parameters." |
| Prisma `P2003` | 400 | "A referenced record does not exist." |
| Anything else | 500 | Generic message. Never Prisma query text. |

Unknown routes produce `404 Route not found: <METHOD> <url>` through `CustomError`.

## Status codes in use

`200` OK · `201` created · `400` bad input · `401` not authenticated or session invalid · `403` role, approval or plan gate · `404` not found · `409` conflict (duplicate email, webinar not started yet) · `429` rate limited · `500` server error.
