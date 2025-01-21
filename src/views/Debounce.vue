<template>
    <div class="outer">
        <h1>{{ msg }}</h1>
        <input type="text" v-model="msg">
    </div>
</template>

<script setup lang='ts'>
import { customRef } from 'vue'

let initMsg = 'orange'
let timer: undefined | number

const msg = customRef((track, trigger) => {
    return {
        // msg 被讀取時調用
        get: () => {
            track() 
            return initMsg
        },

        // msg 被修改時調用
        set: (value: string) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                initMsg = value
                trigger()
            }, 1000);
        }
    }
})
</script>

<style></style>