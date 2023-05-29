<script setup>
import LikeHeart from './LikeHeart.vue';
import { ref, computed, watch } from 'vue'
import { useAddNewMovie } from '../composables/strapi-routes/useAddNewMovie.js'
import { useDeleteMyMovie } from '../composables/strapi-routes/useDeleteMyMovie.js'

const props = defineProps({
    Title: String,
    Poster: String,
    Release: String,
    Runtime: String,
    Director: String,
    Actors: String,
    Plot: String,
    isMyMovie: Boolean,
    id: Number,
    imdbID: String,
});

const { addNewMovie } = useAddNewMovie();
const { deleteMyMovie } = useDeleteMyMovie();
const isFav = ref(props.isMyMovie ? true : false);
const heartColor = computed(() => {
    return isFav.value ? '--color:rgb(212, 57, 57);' : '--color:rgb(143, 141, 141);'
})

async function heartClick() {
    isFav.value = !isFav.value;
    if (isFav.value) {

        addNewMovie(props.imdbID)
    }
    else {
        deleteMyMovie(props.imdbID)
    }
}
</script>

<template>
    <div v-if="Title" class="MovieCard">
        <LikeHeart :isFav="isFav" :heartColor="heartColor" :heartClick="heartClick" />
        <v-icon class="info-icon" icon="mdi-home" />
        <img v-if="Poster" :src="Poster" alt="">
        <p>{{ Title }}</p>
        <div>
            <p v-if="Release">Published: {{ Release }}</p>
            <p v-if="Runtime">Length: {{ Runtime }}</p>
            <p v-if="Director">Regie: {{ Director }}</p>
            <p v-if="Actors">Stars: {{ Actors }}</p>
            <p v-if="Plot">Plot:{{ Plot }}</p>
        </div>
    </div>
</template>

<style>
.MovieCard {
    position: relative;
    border-radius: 15px;
    border: solid 4px var(--frameColor);
    max-width: 15rem;
}

.MovieCard img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

.info-icon {
    position: absolute;
}
</style>