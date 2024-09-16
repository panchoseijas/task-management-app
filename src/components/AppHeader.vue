<template>
  <header class="app-header">
    <div class="header-content">
      <h1 class="app-title">Task Management App</h1>
      <p class="app-subtitle">Organize your tasks efficiently</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<style scoped>
.app-header {
  background-color: #4caf50; /* Primary color */
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.app-title {
  font-size: 1.5em;
  margin: 0;
}

.app-subtitle {
  font-size: 1.2em;
  margin: 5px 0 0;
}
</style>
