<template>
    <div class="container">
        <div class="d-flex align-items-center gap-3 my-3">
            <label for="">Add Todo:</label>
            <input type="text" class="" placeholder="Add todo..." @keydown.enter="addTodo" v-model="todosStore.todos.title">
        </div>
    </div>
</template>

<script setup>
import {todos} from "../stores/todos"

const todosStore = todos()
    const emit = defineEmits(['addTodo'])

    const addTodo = (e) =>{
        if(e.target.value !== ""){
            emit('add-todo', e.target.value)
        }
        e.target.value=""
    }
</script>