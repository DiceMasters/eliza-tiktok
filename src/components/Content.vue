<template>
  <div class="content">
    <video class="content__video" src="video/video.mp4" autoplay loop muted />

    <div class="content__info">
      <div class="content__name">
        Name and Last Name
      </div>

      <p>
        Caption of the post
      </p>

      <span>
        #fyp
      </span>

      <div class="content__translation">
        Show translation
      </div>

      <div class="content__song">
        Song name - song artist
      </div>
    </div>
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

  &__info {
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color:#fff;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
    }
  }

  &__name {
    font-family: 'Proxima Nova';
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.01em;

    color: #fff;
  }

  &__translation {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 22px;
    /* identical to box height, or 169% */

    letter-spacing: -0.01em;

    /* White */

    color: #FFFFFF;

  }
}
</style>
