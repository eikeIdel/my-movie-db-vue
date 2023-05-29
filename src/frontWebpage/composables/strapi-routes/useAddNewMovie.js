import { ref, computed, watch } from 'vue'

import { useSearchMovieDetails } from '../omdb-routes/useSearchMovieDetails';

export function useAddNewMovie() {
    const { movieDetails, startDetailsSearch } = useSearchMovieDetails();
    const movieID = ref('');

    async function addNewMovie(imdbID) {

        console.log(movieDetails.value.imdbID === imdbID)
        if (movieDetails.value.imdbID === imdbID) {
            postData();
        }
        else {
            await startDetailsSearch(imdbID);
        }

        watch(movieDetails, () => {
            console.log('watch triggered')
            if (movieDetails.value.Title) postData();
        })

        async function postData() {
            const data = JSON.stringify({
                data: {
                    imdbID: movieDetails.value.imdbID,
                    Poster: movieDetails.value.Poster,
                    Title: movieDetails.value.Title,
                    Plot: movieDetails.value.Plot,
                    Director: movieDetails.value.Director,
                    Actors: movieDetails.value.Actors,
                    Writer: movieDetails.value.Writer,
                    Release: movieDetails.value.Release,
                    Runtime: movieDetails.value.Runtime,
                    Genre: movieDetails.value.Genre,
                    BoxOffice: movieDetails.value.BoxOffice,
                    Country: movieDetails.value.Country
                }
            })

            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_STRAPI_TOKEN);
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow',
                body: data,
            };
            await fetch(`${import.meta.env.VITE_STRAPI_DOMAIN}/api/movies`, requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }

    }

    return { addNewMovie, movieID }
}
