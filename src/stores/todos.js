import {
    defineStore
} from "pinia"

export const todos = defineStore("todos", {
    state: () => {
        return {
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
});