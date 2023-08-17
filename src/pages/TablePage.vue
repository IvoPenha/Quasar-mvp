<template>
  <h1>oii</h1>
  <RemoteTable :rows="rows" :columns="columns"></RemoteTable>
</template>

<script>
import { rows, columns } from 'src/components/utils';
import RemoteTable from 'src/components/RemoteTable.vue';

export default {
  data() {
    return {
      rows,
      columns,
    };
  },
  components: {
    RemoteTable,
  },
};
</script>
