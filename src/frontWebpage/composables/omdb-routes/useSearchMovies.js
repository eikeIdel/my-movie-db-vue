import { ref, computed } from "vue"
import { useGetMyMovies } from "../strapi-routes/useGetMyMovies";


export function useSearchMovies() {


    const { getMyMovies, myMovies } = useGetMyMovies();
    const useApi = ref(true);
    const query = ref('');
    const queryResults = ref({ Search: [] });

    const onlyMovies = computed(() => {
        if (queryResults.value) {
            let finalResult = queryResults.value.Search;
            finalResult.forEach(foundMovie => {
                if (myMovies.value.some(myMovie => myMovie.imdbID === foundMovie.imdbID)) {
                    finalResult[finalResult.indexOf(foundMovie)].isMyMovie = true;
                }
                else {
                    finalResult[finalResult.indexOf(foundMovie)].isMyMovie = false;
                }
            });

            return finalResult;
        }
    })

    async function startSearch() {
        if (!query.value) {
            alert('No empty search allowed.');
        }
        else if (useApi.value === true) {
            console.count('REQUEST');
            await getMyMovies();
            const baseUrl = import.meta.env.VITE_OMDB_BASE_URL_AND_API;
            const queryUrl = `${baseUrl}&s=${query.value}&Type=movie`;
            const options = {
                method: 'GET',
                redirect: 'follow'
            };

            await fetch(queryUrl, options)
                .then(res => res.json())
                .then(json => queryResults.value = json)
                .catch(err => console.error('error:' + err));
        } else {
            queryResults.value = {
                d: [
                    {
                        id: 'fake123',
                        l: 'Test Movie',
                        i: {
                            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg'
                        },
                        qid: 'movie'
                    }]
            }
        }
    }
    return { query, onlyMovies, startSearch, useApi }
}