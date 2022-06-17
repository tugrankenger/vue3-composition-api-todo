import {
    defineStore
} from "pinia"

export const todos = defineStore("todos", {
    state: () => {
        return {
            editedTask:null,
            tempTodo: "",
            todos: [{
                    id: 1,
                    title: "Go to the gym",
                    completed: false
                },
                {
                    id: 2,
                    title: "Go to swimming",
                    completed: false
                },
                {
                    id: 3,
                    title: "Pay the bills",
                    completed: false
                }
            ]
        }

    },
    actions: {
        addTodo(title) {
            if(this.editedTask !=null){
                this.todos[this.editedTask].title= this.todos.title
                this.editedTask = null
            }else{
                this.todos.push({
                    id: this.todos.length + 1,
                    title: title,
                    completed: false
                })
            }
        }
        
    },
    // actions ekle push islemleri icin
});