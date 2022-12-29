<template>
  <div class="bg-green-500 rounded">
    <div id="aplayer"></div>
  </div>
</template>

<script setup>
import APlayer from 'aplayer';
import {onMounted} from "vue";
import 'aplayer/dist/APlayer.min.css';

onMounted(() => {
  thePlayer()
})

const thePlayer = () => {
  new APlayer({
    container: document.getElementById('aplayer'),
    audio: [
      {
        name: 'First Song',
        artist: 'artist',
        url: '/music/battle-of-the-dragons-8037.mp3',
        cover: 'cover.jpg'
      },
      {
        name: 'Second Song',
        artist: 'artist',
        url: '/music/public_music_epic-hollywood-trailer-9489.mp3',
        cover: 'cover.jpg'
      },
    ]
  })
}
</script>

<style scoped>

</style>
