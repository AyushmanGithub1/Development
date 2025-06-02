<template>
    <div>
      <h1>Completed Tasks</h1>
      <TaskCard v-for="(task, index) in store.completedTasks" :key="index">
        <template #title>{{ task.title }}</template>
      </TaskCard>
    </div>
  </template>
  
  <script setup>
  import TaskCard from '../components/TaskCard.vue';
  import { useTaskStore } from '../store/taskStore';
  
  const store = useTaskStore();
  </script>
  