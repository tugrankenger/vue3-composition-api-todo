<template>
    <div class="container">
        <h3>Todos:</h3>
        <ul class="list-group">
            <li v-for="todo in todos" :key="todo.id" class="list-group-item">
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

    const todos = computed(()=>{
        let completed = [];

        props.todos.filter((item) =>{
            if(!item.completed){
                completed.push(item)
            }
        })
        return completed
    })
</script>