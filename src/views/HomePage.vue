<template>
    <div class="container">
        <div class="new">
            <new @add-todo="addTodo" />
        </div>
        <h3>Todos:</h3>
        <ul class="list-group">
            <li v-for="todo in todosFilter" :key="todo.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <input type="checkbox" v-model="todo.completed">
                    {{ todo.title }}
                </div>
                <button @click="onDetail(todo.id, todo.title)" class="btn btn-primary">Detail</button>
            </li>
        </ul>
        <div class="todo-detail my-3">
            <h3>Details:</h3>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import New from '../components/New.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

import {todos} from "../stores/todos"

const todosStore = todos();

console.log(todosStore.todos)

const emit = defineEmits(['addTodo']);

const todosFilter = computed(() => {
    let completed = []
    todosStore.todos.filter((item) => {
        if (!item.completed) {
            completed.push(item)
        }
    })
    return completed;
})

const addTodo = (text) => {
    console.log("text in home page", text)
    emit('add-todo', text)
}

const onDetail = (todoId) => {
    router.push({ name: 'todoDetail', params: { id: todoId } })
}
</script>