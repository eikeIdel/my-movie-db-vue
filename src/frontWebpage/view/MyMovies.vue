<script setup>
import FlexWrap from '../components/FlexWrap.vue'
import MovieCard from '../components/MovieCard.vue';
import { ref, computed, onMounted } from 'vue'
import { useGetMyMovies } from '../composables/strapi-routes/useGetMyMovies';


const { myMovies, getMyMovies } = useGetMyMovies();
const isMyMovie = ref(true)

</script>

<template>
    <FlexWrap>
        <button @click="getMyMovies">Go, get my Movies!</button>
    </FlexWrap>
    <FlexWrap>
        <MovieCard v-for="movie in myMovies" :id="movie.id" :Title="movie.Title" :Poster="movie.Poster"
            :Actors="movie.Actors" :Release="movie.Release" :imdbID="movie.imdbID" :key="movie.imdbID"
            :isMyMovie="isMyMovie" :Plot="movie.Plot" :Director="movie.Director" :Runtime="movie.Runtime" />
    </FlexWrap>
</template>


<style scoped></style>