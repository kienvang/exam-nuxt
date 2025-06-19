// server/api/[...].ts

import { joinURL } from "ufo";
import { defineEventHandler, H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  console.log("Fetching news from API...");
  const url = useRuntimeConfig().apiBaseUrl;
  const path = event.path.replace(/^\/api\//, "/api/");
  const target = joinURL(url, path);
  return proxyRequest(event, target, {
    headers: {
      ...event.headers,
      accept: "application/json",
    },
  });
});
