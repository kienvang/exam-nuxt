<script setup lang="ts">
const newsList = ref([]);
// const { data: newsList } = await useFetch("/api/news");
async function loadData() {
  try {
    const data = await $fetch("/api/news"); // Lấy dữ liệu từ API
    console.log("Data loaded:", data);
    newsList.value = data; // Gán dữ liệu vào `newsList`
  } catch (err) {
    console.error("Error loading data:", err);
  }
}

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Tiêu đề</th>
        <th>Tác giả</th>
        <th>Nội dung</th>
        <th>Ngày đăng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="news in newsList.data" :key="news.id">
        <td>{{ news.title }}</td>
        <td>{{ news.author }}</td>
        <td>{{ news.content }}</td>
        <td>{{ news.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
}
</style>
