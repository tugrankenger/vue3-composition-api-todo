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
    <div>
        {{ filterId() }}
    </div>
</template>