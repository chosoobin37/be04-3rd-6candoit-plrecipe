import {createRouter, createWebHistory} from 'vue-router';

import MainView from '@/views/MainView.vue';

import PlaceView from '@/views/place/PlaceView.vue';
import PlaceMainView from '@/views/place/PlaceMainView.vue';
import PlaceDetailView from '@/views/place/PlaceDetailView.vue';
import PlaceWriteView from "@/views/place/PlaceWriteView.vue";

import PostView from '@/views/post/PostView.vue';
import PostMainView from '@/views/post/PostMainView.vue';
import PostDetailView from '@/views/post/PostDetailView.vue';
import PostWriteView from "@/views/post/PostWriteView.vue";

import ReadyPage from '@/views/ready/readyPage.vue';
import PlaceStarRegistView from '@/views/place/PlaceStarRegistView.vue';
import PlaceStarView from '@/views/place/PlaceStarView.vue';
import MyPageView from '@/views/MyPageView.vue';

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
                    path: 'detail/:id',
                    component: PostDetailView
                },
                {
                    path: 'new',
                    component: PostWriteView
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
                },
                {
                    path: 'new',
                    component: PlaceWriteView
                },
                {
                    path: 'registStar/:id',
                    component: PlaceStarRegistView
                },
                {
                    path: 'viewStar',
                    component: PlaceStarView
                }
            ]
        },
        {
            path: '/ready',
            component: ReadyPage
        },
        {
            path: '/myPage',
            component: MyPageView
        }
    ]
});

export default router;