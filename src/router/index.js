// import router functions
import { createRouter, createWebHistory } from 'vue-router'
// setup routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'FrontWebpage',
            component: () => import('../frontWebpage/FrontApp.vue'),
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: () => import('../frontWebpage/view/Home.vue'),
                },
                {
                    path: 'my-movies',
                    name: 'MyMovies',
                    component: () => import('../frontWebpage/view/MyMovies.vue')
                },
                {
                    path: 'search-movie',
                    name: 'SearchMovies',
                    component: () => import('../frontWebpage/view/MovieSearch.vue')
                },
            ]
        },
        {
            path: '/admin',
            name: 'AdminDashboard',
            component: () => import('../adminDashboard/AdminDashboard.vue')
        },
    ]
})

export default router