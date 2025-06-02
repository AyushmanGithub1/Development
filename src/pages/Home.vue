<template>
    <div>
      <h1>All Taskss</h1>
      <input v-model="newTask" @keyup.enter="addNewTask" placeholder="Add task..." />
      <TaskCard v-for="(task, index) in store.tasks" :key="index">
        <template #title>{{ task.title }}</template>
        <template #actions>
          <button @click="store.toggleTask(index)">
            {{ task.done ? 'Undo' : 'Complete' }}
          </button>
        </template>
      </TaskCard>
    </div>
  </template>
  
  <script setup>
  import TaskCard from '../components/TaskCard.vue';
  import { ref } from 'vue';
  import { useTaskStore } from '../store/taskStore';
  
  const store = useTaskStore();
  const newTask = ref('');
  
  function addNewTask() {
    if (newTask.value) {
      store.addTask(newTask.value);
      newTask.value = '';
    }
  }
  </script>
  