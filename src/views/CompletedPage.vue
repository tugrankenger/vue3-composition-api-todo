<template>
    <div class="container">
        <h3 class="d-inline-block border p-2">Completed:</h3>
        <ul class="list-group">
            <li v-for="todo in completedTrue()" :key="todo.id" class="list-group-item">
                <input type="checkbox" v-model="todo.completed">
                {{todo.title}}
            </li>
        </ul>
    </div>
</template>

<script setup>

    import {todos} from "../stores/todos"

const todosStore = todos();

    const completedTrue =()=>{
        return todosStore.todos.filter((item)=> item.completed)
    }
</script>