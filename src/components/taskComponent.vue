<template>
  <input v-model="taskInput" />
  <button
    @click="
      () => {
        addTask(taskInput);
        taskInput = '';
      }
    "
    :class="{ 'pointerEvents-none bg-black': taskInput.length > 0 }"
  >
    Adicionar
  </button>
  <p>{{ taskInput }}</p>
  <ul>
    <singleTask
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"
    ></singleTask>
  </ul>
</template>

<script>
import singleTask from './singleTask.vue';
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: 'Ir ao supermercado' },
        { id: 2, title: 'Ir a academia' },
        { id: 3, title: 'Ir ao cinema' },
      ],
      taskInput: '',
    };
  },
  methods: {
    addTask(taskName) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: taskName,
      });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  components: {
    singleTask,
  },
};
</script>
