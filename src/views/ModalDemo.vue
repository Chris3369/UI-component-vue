<template>
    <div class="outer">
        <h1>ModalDemo</h1>
        <NgModal />
    </div>
</template>
    
<script setup lang='ts'>
    import NgModal from '../components/NgModal.vue';
</script>
    
<style>
    .outer {
        background-color: white;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 0 10px;
        width: 400px;
        height: 400px;
    }
</style>