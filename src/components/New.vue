<template>
    <div class="container">
        <div class="d-flex align-items-center gap-3 my-3">
            <label for="">Add Todo:</label>
            <input type="text" class="" placeholder="Add todo..." @keydown.enter="addTodo">
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['addTodo'])

    const addTodo = (e) =>{
        if(e.target.value !== ""){
            emit('add-todo', e.target.value)
        }
        e.target.value=""
    }
</script>