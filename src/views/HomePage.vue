<template>
    <div class="container">
        <div class="new">
            <new @add-todo="addTodo" />
        </div>
        <h3>todos:</h3>
        <ul class="list-group">
            <li v-for="todo in todos" :key="todo.id" class="list-group-item">
                <input type="checkbox" v-model="todo.completed">
                {{todo.title}}
            </li>
        </ul>
    </div>
</template>

<script setup>
import New from '../components/New.vue'
import {computed} from 'vue'

const props = defineProps({
    todos:Array
})

const emit = defineEmits(['addTodo']);

const todos = computed(()=>{
    let completed = []
    props.todos.filter((item) =>{
        if(item.completed){
            completed.push(item)
        }
    })
    return completed;
})

const addTodo =(text) =>{
    console.log("text in home page", text)
    emit('add-todo',text)
}
</script>