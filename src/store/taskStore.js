import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task',{
    state:()=>({
        tasks:[
            {id:1,title:'Buy groceries',done:true},
            {id:2,title:'Buy cds',done:false},
            {id:3,title:'Buy clothes',done:true},
        ]
    }),
    actions:{
        addTask(title){
            this.tasks.push({title,done:false})
        },
        toggleTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    },
    getters:{
        completedTasks(state) {
            return state.tasks.filter(t => t.done);
          }
    }
})