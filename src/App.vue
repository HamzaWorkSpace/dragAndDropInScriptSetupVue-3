<template>
  <div class="wide-page">
    <table style="border-spacing: 0">
      <thead>
        <tr>
          <th>Lorem</th>
          <th>Ipsum</th>
          <th>Sit</th>
        </tr>
      </thead>
      <Container
        @drop="dAndD.onDrop"
        tag="tbody"
        lock-axis="y"
      >
        <Draggable
          v-for="item in dAndD.items"
          :key="item.id"
          tag="tr"
          style="height: 30px"
        >
          <td>Row {{ item.data }} Column 1</td>
          <td>Row {{ item.data }} Column 2</td>
          <td>Row {{ item.data }} Column 3</td>
        </Draggable>
      </Container>
    </table>
  </div>
  <pre>

    {{dAndD.items}}
  </pre>
</template>

<script setup>

    import { Container, Draggable } from "vue-dndrop";
   
    import { DragDropFeature } from'./stores/dragDropStore.js'
          
    const dAndD = DragDropFeature(); 

    dAndD.getData();

</script>

<style lang="css" scoped>
table {
  display: table;

  border-collapse: separate;
}

tr {
  display: table-row !important;
}

tr[style*="transform"] {
  border-collapse: separate !important;
}

td {
  padding: 5px;
  border: 1px solid #ccc !important;
  background-color: white;
}

.table,
td,
th {
  border: 1px solid #ddd;
  text-align: center;
}

.table {
  border-collapse: collapse;
  width: 1200px;
}

th,
td {
  padding: 15px;
}

.page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
}

.prop:nth-child(odd) {
  background-color: #f2f2f2;
}
</style>