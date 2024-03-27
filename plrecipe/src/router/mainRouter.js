import {createRouter, createWebHistory} from 'vue-router';

import PlaceView from '@/views/place/PlaceView.vue';
import MainView from '@/views/MainView.vue';
import PlaceMainView from '@/views/place/PlaceMainView.vue';
import PlaceDetailView from '@/views/place/PlaceDetailView.vue';

import PostView from '@/views/post/PostView.vue';
import PostMainView from '@/views/post/PostMainView.vue';
import PostDetailView from '@/views/post/PostDetailView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainView
        },
        {
            path: '/post',
            component: PostView,
            children:[
                {
                    path: '',
                    component: PostMainView
                },
                {
                    path: 'detail',
                    component: PostDetailView
                }
            ]
        },
        {
            path: '/place',
            component: PlaceView,
            children:[
                {
                    path: '',
                    component: PlaceMainView
                },
                {
                    path: 'detail/:id',
                    component: PlaceDetailView
                }
            ]
        }
    ]
});

export default router;