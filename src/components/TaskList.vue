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
      <li v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" />
      </li>
    </ul>

    <ul v-if="showCompleted" class="flex flex-col justify-start">
      <li v-for="task in completedTasks" :key="task.id">
        <TaskItem :task="task" />
      </li>
    </ul>
  </div>
</template>

<!-- <script>
import { mapGetters, mapActions } from "vuex"
import TaskItem from "./TaskItem.vue"
let id = 1

export default {
  components: { TaskItem },
  data() {
    return {
      newTask: "",
      showCompleted: false,
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
          id: id++,
          text: this.newTask,
          completed: false,
        }
        this.addTask(task)
        this.newTask = ""
      }
    },
    toggleCompleted() {
      this.showCompleted = !this.showCompleted
    },
  },
}
</script> -->

<script>
import { ref, computed } from "vue"
import { useStore } from "vuex"
import TaskItem from "./TaskItem.vue"

let id = 1

export default {
  components: { TaskItem },

  setup() {
    const newTask = ref("")
    const showCompleted = ref(false)

    const store = useStore()

    const tasks = computed(() => store.getters.tasks)
    const completedTasks = computed(() =>
      [...store.getters.tasks].filter((task) => task.completed)
    )

    const handleAddTask = () => {
      if (newTask.value.trim()) {
        const task = {
          id: id++,
          text: newTask.value,
          completed: false,
        }
        store.dispatch("addTask", task)
        newTask.value = ""
      }
    }

    const toggleCompleted = () => {
      showCompleted.value = !showCompleted.value
    }

    return {
      newTask,
      showCompleted,
      tasks,
      handleAddTask,
      toggleCompleted,
      completedTasks,
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
