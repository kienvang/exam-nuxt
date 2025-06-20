export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("Auth middleware triggered for route:", to.fullPath);
  //if (!user.value) {
  // User is not authenticated, redirect to login page
  //  return navigateTo("/login");
  //}
  // Optionally, you can check user roles or permissions here
  // For example, if you want to restrict access to certain pages:
  // if (to.path === '/admin' && !user.value.isAdmin) {
  //   return navigateTo('/unauthorized');
  // }
});
