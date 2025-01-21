<script setup>
import { ref } from 'vue'
import Home from './Home.vue'
import Posts from './Posts.vue'

const currentTab = ref('Home')

const tabs = {
  Home,
  Posts
}

</script>

<template>
  <div class="demo">
    <button 
      v-for="(value, key) in tabs" 
      :key="key" 
      :class="['tab-button', { active: currentTab === key }]"
      @click="currentTab = key">
      {{ key }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px 30px;
  margin-top: 1em;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;

  /* remove the bottom border */
  margin-bottom: -3px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: white;
  border-bottom: none;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>