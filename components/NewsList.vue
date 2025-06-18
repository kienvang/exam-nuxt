<script setup lang="ts">
const newsList = ref([]);

async function loadData() {
  try {
    const { data, error } = await useFetch("http://localhost:3000/api/news"); // Lấy dữ liệu từ API
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
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
      <tr v-for="news in newsList" :key="news.id">
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
