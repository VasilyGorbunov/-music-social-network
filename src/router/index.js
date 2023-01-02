import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AccountView from "@/views/account/AccountView";
import ProfileSection from "@/views/account/ProfileSection";
import EditProfile from "@/views/account/EditProfile";
import AddSong from "@/views/account/AddSong";
import DeleteSong from "@/views/account/DeleteSong";
import AddYoutubeVideo from "@/views/account/AddYoutubeVideo";
import DeleteYoutubeVideo from "@/views/account/DeleteYoutubeVideo";
import CreatePost from "@/views/account/CreatePost";
import EditPost from "@/views/account/EditPost";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/account',
    component: AccountView,
    children: [
      {
        path: 'profile',
        name: 'ProfileSection',
        component: ProfileSection,
      },
      {
        path: 'edit-profile',
        name: 'EditProfile',
        component: EditProfile,
      },
      {
        path: 'add-song',
        name: 'AddSong',
        component: AddSong,
      },
      {
        path: 'delete-song',
        name: 'DeleteSong',
        component: DeleteSong,
      },
      {
        path: 'add-youtube-video',
        name: 'AddYoutubeVideo',
        component: AddYoutubeVideo,
      },
      {
        path: 'delete-youtube-video',
        name: 'DeleteYoutubeVideo',
        component: DeleteYoutubeVideo,
      },
      {
        path: 'create-post',
        name: 'CreatePost',
        component: CreatePost,
      },
      {
        path: 'edit-post',
        name: 'EditPost',
        component: EditPost,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
