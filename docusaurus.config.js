// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NextCybr Docs",
  tagline: "How every part of the NextCybr platform works",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
    faster: true,
  },

  url: "https://vikas-oplify.github.io",
  baseUrl: "/nextcybr-docs/",
  trailingSlash: false,
  organizationName: "vikas-oplify",
  projectName: "nextcybr-docs",

  // Internal handbook: keep it out of search engines.
  noIndex: true,

  onBrokenLinks: "throw",
  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: "throw" },
  },

  i18n: { defaultLocale: "en", locales: ["en"] },

  headTags: [
    { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          breadcrumbs: true,
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      }),
    ],
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { respectPrefersColorScheme: true },
      docs: { sidebar: { hideable: true, autoCollapseCategories: true } },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      navbar: {
        title: "NextCybr",
        logo: { alt: "NextCybr", src: "img/logo.svg" },
        items: [
          { type: "docSidebar", sidebarId: "guide", position: "left", label: "Guide" },
          { to: "/features", label: "Features", position: "left", activeBaseRegex: "^/features" },
          {
            to: "/reference/api",
            label: "API reference",
            position: "left",
            activeBaseRegex: "^/reference/api",
          },
          {
            to: "/reference/data-model",
            label: "Data model",
            position: "left",
            activeBaseRegex: "^/reference/data-model",
          },
          { to: "/reference/plans", label: "Plans", position: "left" },
          { type: "search", position: "right" },
          {
            type: "dropdown",
            label: "Repos",
            position: "right",
            items: [
              { label: "nextcybr-server", href: "https://github.com/oplifyterminal/nextcybr-server" },
              { label: "nextcybr-portal", href: "https://github.com/oplifyterminal/nextcybr-portal" },
              {
                label: "nextcybr-admin-portal",
                href: "https://github.com/oplifyterminal/nextcybr-admin-portal",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Guide",
            items: [
              { label: "Platform overview", to: "/overview" },
              { label: "Personas & roles", to: "/getting-started/personas" },
              { label: "Architecture", to: "/getting-started/architecture" },
              { label: "Local setup", to: "/getting-started/local-setup" },
            ],
          },
          {
            title: "Reference",
            items: [
              { label: "API reference", to: "/reference/api" },
              { label: "Data model", to: "/reference/data-model" },
              { label: "Plans & feature matrix", to: "/reference/plans" },
              { label: "Frontend routes", to: "/reference/frontend-routes" },
            ],
          },
          {
            title: "Operations",
            items: [
              { label: "Environments & secrets", to: "/operations/environments" },
              { label: "Deployment", to: "/operations/deployment" },
              { label: "Testing & quality", to: "/operations/testing" },
              { label: "Maintaining these docs", to: "/operations/maintaining-docs" },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Oplify Solutions Pvt. Ltd. · Internal documentation`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ["bash", "json", "nginx"],
      },
      mermaid: {
        theme: { light: "base", dark: "dark" },
        options: {
          fontFamily: "Inter, system-ui, sans-serif",
          themeVariables: {
            primaryColor: "#eaf2fd",
            primaryBorderColor: "#025bcf",
            primaryTextColor: "#0b1b33",
            lineColor: "#5a6b85",
            secondaryColor: "#e6f1f7",
            tertiaryColor: "#f7f9fc",
          },
        },
      },
    }),
};

export default config;
