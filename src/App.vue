<template>
  <a-layout style="background:transparent">
    <a-layout-header>
      <a-row  type="flex" justify="space-around">
      <a-list-item >
        <router-link :to="{ name: 'homePage' }" class="btn border text-decoration-none"
          active-class="bg-primary text-white">Todo</router-link>
      </a-list-item>
      <a-list-item>
        <router-link :to="{ name: 'completedPage' }"
          active-class="danger">Completed</router-link>
      </a-list-item>
    </a-row>
    </a-layout-header>
    <a-layout-content>
      <a-col :xs="{span:24, offset:0}" :lg="{span:12, offset:6}">
      <router-view @add-todo="addTodo" :completed="completedCount" :unCompleted="unCompletedCount" />
    </a-col>
    </a-layout-content>
  </a-layout>
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

const completedCount = computed(() => {
  return todosStore.todos.filter((item) => item.completed).length
})
const unCompletedCount = computed(() => {
  return todosStore.todos.filter((item) => !item.completed).length
})

</script>