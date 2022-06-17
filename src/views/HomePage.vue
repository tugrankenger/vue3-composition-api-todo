<template>
    <div class="container">
        <div class="new">
            <new @add-todo="addTodo" />
        </div>
        <h3>Todos:</h3>
        <ul class="list-group">
            <li v-for="(todo, index) in todosFilter" :key="todo.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <input type="checkbox" v-model="todo.completed">
                    {{ todo.title }}
                </div>
                <div class="btns d-flex gap-3">
                    <button @click="upTodo(index)" class="btn btn-success">Up</button>
                    <button @click="downTodo(index)" class="btn btn-secondary">Down</button>
                    <button @click="deleteTask(index)" class="btn btn-danger">Delete</button>
                    <button @click="editTask(index)" class="btn btn-warning">Edit</button>
                    <button @click="onDetail(todo.id, index)" class="btn btn-primary">Detail</button>
                </div>
            </li>
        </ul>
        <div class="completedInfo d-flex align-items center justify-content-between mx-1 my-2">
            <router-link :to="{ name: 'completedPage' }"><span class="text-primary">Completed items counts:
                    {{ props.completed }}</span>
            </router-link>
            <span class="text-danger">Uncompleted item count: {{ props.unCompleted }}</span>
        </div>
        <div class="todo-detail my-3">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import New from '../components/New.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { todos } from "../stores/todos"

const props = defineProps({
    completed: Number,
    unCompleted: Number
})

const router = useRouter()

const todosStore = todos();

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

const upTodo = (index) =>{
    if(index === 0) return

    todosStore.tempTodo = todosStore.todos[index]
    todosStore.todos[index] = todosStore.todos[index-1]
    todosStore.todos[index-1] = todosStore.tempTodo
}

const downTodo = (index)=>{
    if(index === todosStore.todos.length-1) return

    todosStore.tempTodo = todosStore.todos[index]
    todosStore.todos[index] = todosStore.todos[index +1]
    todosStore.todos[index +1] = todosStore.tempTodo
}

const deleteTask = (index) => {
    if (confirm('Are you sure?')) {
        todosStore.todos.splice(index, 1)
    }
}

const editTask = (index) => {
    //console.log(todosStore.todos[index].title)
    todosStore.todos.title = todosStore.todos[index].title
    todosStore.editedTask = index
    //console.log(todosStore.editedTask)
}

const addTodo = (text) => {
    console.log("text in home page", text)
    emit('add-todo', text)
}

const onDetail = (todoId) => {
    router.push({ name: 'todoDetail', params: { id: todoId } })
}
</script>