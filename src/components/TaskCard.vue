<template>
    <div class="task-card">
      <slot name="title"></slot>
      <slot name="actions"></slot>
    </div>
  </template>
  
  <style>
  .task-card { padding: 1rem; border: 1px solid #ccc; margin: 0.5rem 0; }
  </style>