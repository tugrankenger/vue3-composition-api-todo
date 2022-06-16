<template>
  <div class="container">
    <ul class="list-group bg-light d-flex gap-5 p-2 m-2 align-items-center justify-content-center flex-row">
      <li class="list-group-item border-0 rounded-0 bg-transparent">
        <router-link :to="{ name: 'homePage' }" class="btn border text-decoration-none"
          active-class="bg-primary text-white">Todo</router-link>
      </li>
      <li class="list-group-item border-0 rounded-0 bg-transparent">
        <router-link :to="{ name: 'completedPage' }" class="btn border text-decoration-none"
          active-class="bg-primary text-white">Completed</router-link>
      </li>
    </ul>
    <router-view @add-todo="addTodo" :completed="completedCount" :unCompleted="unCompletedCount" />
  </div>
</template>

<script setup>
// import New from "./components/New.vue"
// import Todo from "./components/Todo.vue"
// import Completed from "./components/Completed.vue"
// import { reactive } from "@vue/reactivity"
import { computed } from "@vue/runtime-core";
import { todos } from "./stores/todos"

const todosStore = todos();

// const state = reactive({
//   todos:[
//     {
//       id:1,
//       title:"Go to the gym",
//       completed: false
//     },
//     {
//       id:2,
//       title:"Go to swimming",
//       completed: false
//     },
//     {
//       id:3,
//       title:"Pay the bills",
//       completed: false
//     }
//   ]
// })

const addTodo = (title) => {
  todosStore.addTodo(title)
}

const completedCount = computed(()=>{
  return todosStore.todos.filter((item) => item.completed).length
})
const unCompletedCount = computed(()=>{
  return todosStore.todos.filter((item) => !item.completed).length
})

</script>