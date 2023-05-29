import { ref } from 'vue'

export function useDeleteMyMovie() {
    const strapiID = ref(0);

    async function deleteMyMovie(imdbID) {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_STRAPI_TOKEN);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        await fetch(`${import.meta.env.VITE_STRAPI_DOMAIN}/api/movies?filters[imdbID][$eq]=${imdbID}`, requestOptions)
            .then(response => response.json())
            .then(result => strapiID.value = result.data[0].id)
            .catch(error => console.log('error', error));

        requestOptions.method = 'DELETE';
        console.log(strapiID.value);
        await fetch(`${import.meta.env.VITE_STRAPI_DOMAIN}/api/movies/${strapiID.value}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return { deleteMyMovie }
}