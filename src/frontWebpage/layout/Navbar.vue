<script setup>
</script>
<template>
    <nav>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink> |
        <RouterLink :to="{ name: 'MyMovies' }">Get My Collection</RouterLink> |
        <RouterLink :to="{ name: 'SearchMovies' }">Movie Search</RouterLink>
    </nav>
</template>


<style scoped>
nav {
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid;
}

.router-link-active {
    filter: brightness(1.2);
    font-weight: 500;

}
</style>