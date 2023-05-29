import { ref, watch, computed } from 'vue'

export function useGetMyMovies() {
    const myMoviesRaw = ref([]);
    const myMovies = computed(() => {
        const beautifyData = myMoviesRaw.value.map((nestedData) => {
            return {
                id: nestedData.id,
                imdbID: nestedData.attributes.imdbID,
                Poster: nestedData.attributes.Poster,
                Title: nestedData.attributes.Title,
                Plot: nestedData.attributes.Plot,
                Director: nestedData.attributes.Director,
                Actors: nestedData.attributes.Actors,
                Writer: nestedData.attributes.Writer,
                Release: nestedData.attributes.Release,
                Runtime: nestedData.attributes.Runtime,
                Genre: nestedData.attributes.Genre,
                BoxOffice: nestedData.attributes.BoxOffice,
                Country: nestedData.attributes.Country
            }
        })
        return beautifyData
    })

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_STRAPI_TOKEN);
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    async function getMyMovies() {
        await fetch(`${import.meta.env.VITE_STRAPI_DOMAIN}/api/movies`, requestOptions)
            .then(response => response.json())
            .then(result => myMoviesRaw.value = result.data)
            .catch(error => console.log('error', error));
    }

    return { myMovies, getMyMovies }
}