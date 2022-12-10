<template>
  <div class="content">
    <video class="content__video" src="video/video.mp4" autoplay loop muted />
  </div>
</template>

<style lang="scss">
.content {
  width: 100%;
  height: calc(100% - 84px);

  &__video {
    width: 100%;
    height: 100%;
  }
}
</style>
