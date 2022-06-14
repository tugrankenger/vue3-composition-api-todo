<template>
    <div class="container">
        <h3>Completed:</h3>
        <ul class="list-group">
            <li v-for="todo in completedTodos" :key="todo.id" class="list-group-item">
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

    const completedTodos = computed(()=>{
        let completed = [];

        props.todos.filter((item) =>{
            if(item.completed){
                completed.push()
            }
        })

        return completed;
    })
</script>