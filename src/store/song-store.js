import { defineStore } from 'pinia'
import axios from "axios";

export const useSongStore = defineStore('song', {
    state: () => ({
        artistId: null,
        artistName: null,
        songs: null,
    }),
    actions: {
        async fetchSongsByUserId(userId) {
            let res = await axios.get(`api/user/${userId}/songs`)
            this.$state.artistId = res.data.artist_id
            this.$state.artistName = res.data.artist_name
            this.$state.songs = res.data.songs
        },
        clearSongs() {
            this.$state.artistId = null
            this.$state.artistName = null
            this.$state.songs = null
        }
    },
    persist: true
})
