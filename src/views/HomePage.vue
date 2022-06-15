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
                <button @click="onDetail(todo.id, todo.title)">Detay</button>
            </li>
        </ul>

        <div class="todo-detail">
            <router-view :todos="props.todos"/>
        </div>
    </div>
</template>

<script setup>
import New from '../components/New.vue'
import {computed} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const props = defineProps({
    todos:Array
})

const emit = defineEmits(['addTodo']);

const todos = computed(()=>{
    let completed = []
    props.todos.filter((item) =>{
       if(!item.completed){
            completed.push(item)
        }
    })
    return completed;
})

const addTodo =(text) =>{
    console.log("text in home page", text)
    emit('add-todo',text)
}

const onDetail = (todoId, title) => {
    router.push({name: 'todoDetail', params: {id: todoId }})
}
</script>