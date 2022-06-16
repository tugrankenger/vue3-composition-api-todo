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
        <h3 class="d-inline-block p-2 border">Details:</h3>
        <div class="card">
            <div class="card-header">
                <h3><strong>Id:</strong> {{todo().id}}</h3>
            </div>
            <div class="card-body">
                <p><strong>Title:</strong> {{todo().title}}</p>
            </div>
            <div class="card-footer">
                <p><strong>Completed:</strong> {{todo().completed}}</p>
            </div>
        </div>
    </div>
</template>