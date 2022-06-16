<script setup>
import {useRoute} from 'vue-router'

import {todos} from "../stores/todos"

const todosStore = todos();

const route = useRoute()

const todo = () =>{
    return todosStore.todos.find((item) => item.id == route.params.id)
    // filter array doner, find object doner
}

</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>{{todo().id}}</h3>
            </div>
            <div class="card-body">
                <p>{{todo().title}}</p>
            </div>
            <div class="card-footer">
                <p>{{todo().completed}}</p>
            </div>
        </div>
    </div>
</template>