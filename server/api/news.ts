export default defineEventHandler(async () => {
  console.log("Fetching news from API...");
  const url = useRuntimeConfig().apiBaseUrl;
  return await $fetch(url + "/api/news");
});
