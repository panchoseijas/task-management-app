<template>
  <div class="flex flex-wrap justify-between content-center p-1 w-[500px]">
    <div class="flex justify-end w-1/6">
      <span class="py-3 px-0">
        {{ task.id }}
      </span>
    </div>
    <div class="flex justify-between p-3 px-0 content-center w-3/6">
      <span
        :class="{
          completed: task.completed,
        }"
        >{{ task.text }}</span
      >
    </div>
    <div class="flex gap-2">
      <button
        :class="{
          'bg-green-100 text-green-800 border-green-500': task.completed,
          'bg-gray-100 text-gray-800 border-gray-500': !task.completed,
          'p-3 rounded-lg': true, // Always apply these classes
        }"
        @click="onToggleTaskCompleted"
      >
        Toggle
      </button>
      <button
        class="bg-red-100 text-red-800 bordr-red-500 p-1 rounded-xl"
        @click="handleRemoveTask"
      >
        X
      </button>
    </div>
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
