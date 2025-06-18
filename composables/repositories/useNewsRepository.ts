export default function useNewsRepository() {
  const getNews = async (params: Record<string, any> = {}) => {
    return await $fetch("/api/news");
  };

  return {
    getNews,
  };
}
