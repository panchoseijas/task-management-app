import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            tasks: []
        };
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task);
        },
        REMOVE_TASK(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
        TOGGLE_TASK_COMPLETED(state, taskId) {
            const task = state.tasks.find(task => task.id === taskId);
            if (task) {
                task.completed = !task.completed;
            }
        }
    },
    actions: {
        addTask({ commit }, task) {
            commit('ADD_TASK', task);
        },
        removeTask({ commit }, taskId) {
            commit('REMOVE_TASK', taskId);
        },
        toggleTaskCompleted({ commit }, taskId) {
            commit('TOGGLE_TASK_COMPLETED', taskId);
        }
    },
    getters: {
        tasks: state => state.tasks
    }
});

export default store;
