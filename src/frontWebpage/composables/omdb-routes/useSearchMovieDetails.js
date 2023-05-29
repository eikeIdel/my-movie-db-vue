import { ref, computed } from "vue"

export function useSearchMovieDetails() {
    const queryResults = ref([]);
    const movieDetails = computed(() => {
        if (queryResults.value) {
            let data = queryResults.value
            return data;
        }
    })

    async function startDetailsSearch(imdbID) {
        console.count('REQUEST');
        const baseUrl = import.meta.env.VITE_OMDB_BASE_URL_AND_API;
        const queryUrl = `${baseUrl}&i=${imdbID}`;
        const options = {
            method: 'GET',
        };

        fetch(queryUrl, options)
            .then(res => res.json())
            .then(json => queryResults.value = json)
            .catch(err => console.error('error:' + err));
    }

    return { movieDetails, startDetailsSearch }
}