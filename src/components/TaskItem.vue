<template>
  <div class="item">
    <div class="item-name">
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
    </div>
    <div>
      <button @click="onToggleTaskCompleted">Toggle</button>
    </div>
    <div><button @click="handleRemoveTask">Remove</button></div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  props: {
    task: Object,
  },
  methods: {
    ...mapActions(["toggleTaskCompleted", "removeTask"]),
    onToggleTaskCompleted() {
      this.toggleTaskCompleted(this.task.id)
    },
    handleRemoveTask() {
      this.removeTask(this.task.id)
    },
  },
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
.item {
  padding: 2px;
  display: flex;
  justify-content: space-between;
  width: 500px;
}

.item-name {
  width: 200px;
}
</style>
