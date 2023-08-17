<template>
  <li>
    <p>{{ task.title }}</p>
    {{ index }}
    <button @click="removeTask(index)">X</button>
  </li>
</template>

<script>
export default {
  props: ['task', 'index'],
};
</script>

<style>
li {
  background-color: #42968e;
  padding: 8px 4px;
  border-radius: 5px;
  margin-bottom: 14px;
}
p {
  font-size: 24px;
}
button {
  padding: 8px 4px;
  border-radius: 5px;
  background-color: #fff;
}
</style>
