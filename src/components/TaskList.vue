<template>
  <div class="flex justify-center items-center flex-col p-3 gap-5 w-full">
    <div class="flex gap-2">
      <input
        class="border-2 border-gray-300 px-4 py-2 rounded-lg"
        v-model="newTask"
        @keyup.enter="handleAddTask"
        placeholder="Add a new task"
      />
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="handleAddTask"
      >
        Add Task
      </button>
      <button @click="toggleCompleted">Show completed</button>
    </div>

    <ul v-if="!showCompleted" class="flex flex-col justify-start">
      <li v-for="task in store.tasks" :key="task.id">
        <TaskItem
          :task="task"
          @toggle="toggleTask(task.id)"
          @remove="removeTask(task.id)"
        />
      </li>
    </ul>

    <ul v-if="showCompleted" class="flex flex-col justify-start">
      <li v-for="task in completedTasks" :key="task.id">
        <TaskItem
          :task="task"
          @toggle="toggleTask(task.id)"
          @remove="removeTask(task.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/index" // Import your custom store
import { computed, ref } from "vue"
import TaskItem from "@/components/TaskItem.vue" // Adjust the path as necessary

export default {
  components: {
    TaskItem, // Register the TaskItem component
  },
  setup() {
    const newTask = ref("")
    const showCompleted = ref(false)
    const completedTasks = computed(() =>
      [...store.tasks].filter((task) => task.completed)
    )
    let index = 1

    const handleAddTask = () => {
      if (newTask.value.trim()) {
        store.addTask({
          id: index++,
          text: newTask.value,
          completed: false,
        })
        newTask.value = "" // Clear the input
      }
    }

    const toggleTask = (taskId) => {
      store.toggleTaskCompleted(taskId)
    }

    const removeTask = (taskId) => {
      store.removeTask(taskId)
    }

    const toggleCompleted = () => {
      showCompleted.value = !showCompleted.value
    }

    return {
      newTask,
      store,
      showCompleted,
      handleAddTask,
      toggleTask,
      removeTask,
      completedTasks,
      toggleCompleted,
    }
  },
}
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

.lista {
  display: flex;
  flex-direction: column;
}
</style>
