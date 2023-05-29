<script setup>
import { ref, computed } from "vue"
import MovieCard from '../components/MovieCard.vue'
import FlexWrap from '../components/FlexWrap.vue'
import { useSearchMovies } from "../composables/omdb-routes/useSearchMovies";
import { useSearchMovieDetails } from "../composables/omdb-routes/useSearchMovieDetails";

const { movieDetails } = useSearchMovieDetails();

const { query, onlyMovies, startSearch, useApi } = useSearchMovies();
useApi.value = true;

async function handleSubmit() {
    await startSearch();
}

function log() {
    console.log(movieDetails.value);
}
</script>

<template>
    <button @click="log">Log</button>
    <form @submit.prevent="handleSubmit()">
        <label>Find your favorite Movie:</label>
        <input v-model.text="query" name="query" />
        <button type="submit">Start Search</button>
    </form>
    <FlexWrap>
        <MovieCard v-for="movie in onlyMovies" :id="movie.id" :Title="movie.Title" :Poster="movie.Poster"
            :Actors="movie.Actors" :Release="movie.Release" :imdbID="movie.imdbID" :key="movie.imdbID"
            :isMyMovie="isMyMovie" :Plot="movie.Plot" :Director="movie.Director" :Runtime="movie.Runtime" />
    </FlexWrap>
</template>

<style scoped>
form {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto 2rem auto;

}

input {
    border: 1px solid var(--frameColor);
    border-radius: 3px;
}

button {
    margin: 2rem 0;
}
</style>