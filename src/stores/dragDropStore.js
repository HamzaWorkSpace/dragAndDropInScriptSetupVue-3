import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import { applyDrag, generateItems } from "../utils/helpers.js";


export const DragDropFeature = defineStore('dragDrop',{

  state: () => ({

    items : 0,

  }),
  actions:{
    getData()
    {
      this.items = generateItems(10, (i) => ({ id: i, data: "Draggable " + i }));
    },

    onDrop(dropResult) {
      console.log("On Drop", dropResult);
      this.items = applyDrag(this.items, dropResult);
    },

  },
  getters:{}


})
