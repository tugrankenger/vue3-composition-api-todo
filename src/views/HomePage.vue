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
                <button @click="onDetail(todo.id)" class="btn btn-primary">Detail</button>
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

const addTodo = (text) => {
    console.log("text in home page", text)
    emit('add-todo', text)
}

const onDetail = (todoId) => {
    router.push({ name: 'todoDetail', params: { id: todoId } })
}
</script>