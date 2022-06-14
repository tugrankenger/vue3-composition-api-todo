<template>
    <div class="container">
        <input type="text" @keydown.enter="addTodo">
    </div>
</template>

<script setup>
    const emit = defineEmits(['addTodo'])

    const addTodo = (e) =>{
        emit('add-todo', e.target.value)
    }
</script>