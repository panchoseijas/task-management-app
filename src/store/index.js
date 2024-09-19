import { reactive } from 'vue';

const store = reactive({
    tasks: [],

    // Methods to mutate the state (like Vuex actions/mutations)
    addTask(task) {
        this.tasks.push(task);
    },

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    },

    toggleTaskCompleted(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    }
});

export default store;
