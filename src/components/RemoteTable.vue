<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      :separator="separator"
      :rows="data"
      :columns="column"
      row-key="id"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:body-cell-numProcesso="props">
        <q-td :props="props" @click="() => console.log(props.value)">
          <p class="NumProcesso">
            {{ props.value }}
          </p>
        </q-td>
      </template>

      <template v-slot:body-cell-anexos="props">
        <q-td :props="props" :class="['my-table-details', props.colName]">
          <q-btn
            :class="props.row.anexos.length === 0 ? 'disabled' : ''"
            color="primary"
            icon="insert_drive_file "
            @click="() => console.log('oi')"
          />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const selected = ref([]);
    return {
      data: props.rows,
      column: props.columns,
      selected,
      separator: ref('cell'),
    };
  },
};
</script>

<style>
.disabled {
  pointer-events: none;
  opacity: 0.5;
  filter: grayscale(1);
}
.NumProcesso {
  color: rgb(43, 43, 206);
  cursor: pointer;
  text-decoration: underline;
  font-size: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
}
</style>
