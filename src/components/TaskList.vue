<template>
  <div class="wrapper">
    <div>
      <input
        v-model="newTask"
        @keyup.enter="handleAddTask"
        placeholder="Add a new task"
      />
      <button @click="handleAddTask">Add Task</button>
    </div>
    <ul class="lista">
      <li v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import TaskItem from "./TaskItem.vue"

export default {
  components: { TaskItem },
  data() {
    return {
      newTask: "",
    }
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["addTask"]),
    handleAddTask() {
      if (this.newTask.trim()) {
        const task = {
          id: Date.now(),
          text: this.newTask,
          completed: false,
        }
        this.addTask(task)
        this.newTask = ""
      }
    },
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
