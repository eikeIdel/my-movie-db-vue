<script setup>
</script>

<template>
    <div class="flex-wrap-container">
        <slot></slot>
    </div>
</template>

<style>
.flex-wrap-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}
</style>