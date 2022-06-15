<template>
    <div class="container">
        <div class="d-flex align-items-center gap-3 my-3">
            <label for="">Add Todo:</label>
            <input type="text" @keydown.enter="addTodo">
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['addTodo'])

    const addTodo = (e) =>{
        emit('add-todo', e.target.value)
    }
</script>