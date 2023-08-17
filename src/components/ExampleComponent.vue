<template>
  <taskList></taskList>
</template>

<script>
import taskList from './taskComponent.vue';
export default {
  data() {
    return {
      message: 'Hello World',
      showMessaage: true,
      counter: 0,
    };
  },
  methods: {
    toogleMessage() {
      this.showMessaage = !this.showMessaage;
    },
  },
  components: {
    taskList: taskList,
  },
};
</script>
