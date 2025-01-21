<template>
    <button @click="show = true">open</button>

    <Teleport to="body">
        <div class="modal" v-show="show">
            <h2>title</h2>
            <p>content</p>
            <button @click="show = false">close</button>
        </div>
    </Teleport>

</template>

<script setup lang='ts'>
import {ref} from 'vue'

const show = ref(false)
</script>

<style>
.modal {
    width: 200px;
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>