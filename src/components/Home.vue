<template>
    <div align="center">
      <header-page></header-page><br><br>
            <input type="text" v-model="newTitle" placeholder="Enter Task Title" /> <br><br>
            <input type="text" v-model="newDesc" placeholder="Enter Task Description" /> <br><br>
            <input type="text" v-model="newDueDate" placeholder="Enter Due Date" /> <br><br>
            <button @click="addTaskDB">Add To Do</button><button @click="addProgressDB">Add In Progress</button><button @click="addCompleteDB">Add Completed</button>

      <div class="container" align="center" >
      <div class="row mt-3">
        <div class="col-md-4">
          <div class="p-2 alert alert-secondary">
            <h3>To-Do</h3>
            <draggable class="list-group kanban-column" :list="arrToDo" group="tasks">
            <div class="list-group-item" v-for="element in arrToDo" :key="element.name">
            <b-card :title="element.title">
                <b-card-text>
                        Description: {{element.desc}}<br>
                        Due Date: {{element.dueDate}}<br>
                </b-card-text>
            </b-card>
            </div>
            </draggable>
        </div>
      </div>
  

        <div class="col-md-4">
          <div class="p-2 alert alert-warning">
            <h3>In Progress</h3>
            <draggable class="list-group kanban-column" :list="arrInProgress" group="tasks">
            <div class="list-group-item" v-for="element in arrInProgress" :key="element.name">
              <b-card :title="element.title">
                <b-card-text>
                        Description: {{element.desc}}<br>
                        Due Date:{{element.dueDate}}<br>
                </b-card-text>
            </b-card>
          </div>
        </draggable>
        </div>
        </div>
  

        <div class="col-md-4">
          <div class="p-2 alert alert-success">
            <h3>Completed</h3>
            <draggable class="list-group kanban-column" :list="arrToDoarrCompleted" group="tasks">
            <div class="list-group-item" v-for="element in arrCompleted" :key="element.name">
              <b-card :title="element.title">
                <b-card-text>
                        Description: {{element.desc}}<br>
                        Due Date: {{element.dueDate}}<br>
                </b-card-text>
            </b-card>
          </div>
        </draggable>
          </div>
        </div>
        </div>
        </div>
      </div>

  </template>
  
  
<script>
  import db from "../assets/db.js"; 
  import HeaderPage from "./HeaderPage.vue";
  import Draggable from "vuedraggable";
  export default {
    name: 'App',
    components: {
      HeaderPage,
      Draggable,
    },
    data() {
      return {
        newTitle: "",
        newDesc:"",
        newDueDate: "",
        arrToDo: [],
        arrInProgress:[],
        arrCompleted:[]
    }
  },
  methods: {
    async addTaskDB(){
    const dataID = await db.toDo.add({
      title: this.newTitle,
      desc: this.newDesc,
      dueDate: this.newDueDate,

    newTitle: "",
    newDesc:"",
    newDueDate: "",
    });

    console.log(`Data ${dataID} has been added`);
  },

  async addProgressDB(){
    const dataID = await db.inProgress.add({
      title: this.newTitle,
      desc: this.newDesc,
      dueDate: this.newDueDate,

    newTitle: "",
    newDesc:"",
    newDueDate: "",
    });

    console.log(`Data ${dataID} has been added`);
  },

  async addCompleteDB(){
    const dataID = await db.completed.add({
      title: this.newTitle,
      desc: this.newDesc,
      dueDate: this.newDueDate,

    newTitle: "",
    newDesc:"",
    newDueDate: "",
    });

    console.log(`Data ${dataID} has been added`);
  }
},

mounted() {
  const InitData = async()=>{
    const todoDB = await db.toDo.toArray();
    const inProgressDB = await db.inProgress.toArray();
    const completedDB = await db.completed.toArray();    
    
    todoDB.forEach(item=>{
      this.arrToDo.push(item);
    });

    inProgressDB.forEach(item=>{
      this.arrInProgress.push(item);
    });

    completedDB.forEach(item=>{
      this.arrCompleted.push(item);
    });
  }
  InitData();
  }
}
</script>
  

<style>
  .kanban-column {
    min-height: 300px;
  }

  button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

  </style>