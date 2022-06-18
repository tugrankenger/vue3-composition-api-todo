<template>
    <content>
        <a-row type="flex" flex="2" style="margin: 20px 0">
            <a-typography :level="4">Add Todo: </a-typography>
            <input type="text" class="" placeholder="Add todo..." @keydown.enter="addTodo" v-model="todosStore.todos.title" style="margin-left:20px">
        </a-row>
    </content>
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