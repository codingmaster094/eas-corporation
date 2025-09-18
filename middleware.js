import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed", // ✅ no `/en` in URL
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
