<script setup>
import {useRoute} from 'vue-router'

const props = defineProps({
    todos: Array
})

const route = useRoute()

const filterId = () =>{
    return props.todos.filter((item) => item.id == route.params.id)
}

</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>{{filterId()}}</h3>
            </div>
            <div class="card-body">
                <p>{{filterId()}}</p>
            </div>
            <div class="card-footer">
                <p>{{filterId()}}</p>
            </div>
        </div>
    </div>
</template>