<template>
  <div class="task-list">
    <h2>Tasks (Options API)</h2>
    
    <!-- Add new task -->
    <div class="add-task">
      <input type="text" v-model="newTask" placeholder="Enter a new task">
      <button @click="addNewTask">Add Task</button>
    </div>

    <!-- Task list -->
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        <input type="checkbox" 
               :checked="task.done" 
               @change="toggleTask(index)">
        <span :class="{ done: task.done }">{{ task.title }}</span>
      </li>
    </ul>

    <!-- Completed tasks counter -->
    <div class="stats">
      Completed tasks: {{ completedTasks.length }}
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../store/taskStore'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'TaskListOptions',
  data() {
    return {
      newTask: ''
    }
  },
  computed: {
    // Map store state and getters
    ...mapState(useTaskStore, ['tasks']),
    ...mapState(useTaskStore, ['completedTasks'])
  },
  methods: {
    // Map store actions
    ...mapActions(useTaskStore, ['addTask', 'toggleTask']),
    
    addNewTask() {
      if (this.newTask.trim()) {
        this.addTask(this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>

<style scoped>
.task-list {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.add-task {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.stats {
  margin-top: 20px;
  color: #666;
}
</style> 