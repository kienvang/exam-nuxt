export default defineNuxtPlugin((nuxtApp) => {
  addRouteMiddleware(
    "auth2",
    (to, from) => {
      console.log("middle plugin xxx: ");
    },
    { global: true }
  );
});
