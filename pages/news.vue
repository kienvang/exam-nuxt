<script setup lang="ts">
const newsList = ref([
  { id: 1, title: 'Tin tức 1', content: 'Tin tuc', author: 'Tác giả', date: '2025-01-01' },
  { id: 2, title: 'Tin tức 2', content: 'Nội dung tin tức', author: 'Tác giả', date: '2025-01-02' },
  { id: 3, title: 'Tin tức 3', content: 'Nội dung tin tức', author: 'Tác giả', date: '2025-01-03' },
  { id: 4, title: 'Tin tức 4', content: 'Nội dung tin tức', author: 'Tác giả', date: '2025-01-04' },
]);
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
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
}
</style>