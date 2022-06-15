<template>
    <div class="container">
        <h3>completed</h3>
        <ul class="list-group">
            <li v-for="todo in completedTrue()" :key="todo.id" class="list-group-item">
                <input type="checkbox" v-model="todo.completed">
                {{todo.title}}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import {computed} from 'vue'

    const props = defineProps({
        todos: Array
    })

    const completedTrue =()=>{
        return props.todos.filter((item)=> item.completed)
    }
</script>