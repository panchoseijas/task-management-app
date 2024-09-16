<template>
  <div id="app" class="">
    <AppHeader />
    <TaskList />
    <AppFooter />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue"
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"

export default {
  components: {
    TaskList,
    AppHeader,
    AppFooter,
  },
}
</script>

<style>
body {
  max-width: 1200px;
}
</style>
