<template>
    <content>
        <div class="new">
            <new @add-todo="addTodo" />
        </div>
        <a-typography-title :level="3">Todos:</a-typography-title>
        <a-list  style="border: 1px solid hsl(197, 10%, 87%); padding: 20px;">
            <a-list-item v-for="(todo, index) in todosFilter" :key="todo.id">
                <a-row type="flex" justify="space-araound" align="middle" style="width:100%">
                    <a-col flex="20px">
                        <input type="checkbox" v-model="todo.completed">
                    </a-col>
                    <a-col flex="auto">
                        {{ todo.title }}
                    </a-col>
                </a-row>
                <a-space :size="20">
                    <a-button @click="upTodo(index)" type="text"><UpOutlined /></a-button>
                    <a-button @click="downTodo(index)" type="text" ><DownOutlined /></a-button>
                    <a-button @click="deleteTask(index)" danger>Delete</a-button>
                    <a-button @click="editTask(index)" type="dashed">Edit</a-button>
                    <a-button @click="onDetail(todo.id,index)" type="primary">Detail</a-button>
                </a-space>
            </a-list-item>
        </a-list>
        <a-row type="flex" justify="space-between" style="margin: 20px 0">
            <a-col >
                <router-link :to="{ name: 'completedPage' }">
                    <a-typography-text type="success">Completed items counts: {{ props.completed }}</a-typography-text>
                </router-link>
            </a-col>
            <a-col>
                <a-typography-text type="danger">Uncompleted items counts: {{ props.unCompleted }}</a-typography-text>
            </a-col>
        </a-row>
        <div class="todo-detail my-3">
            <router-view />
        </div>
    </content>
</template>

<script setup>
import New from '../components/New.vue'
import { DownOutlined, UpOutlined} from '@ant-design/icons-vue'
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