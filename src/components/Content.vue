<template>
  <div class="content">
    <video class="content__video" src="video/video.mp4" autoplay loop muted />

    <div class="content__info">
      <div class="content__info-user">
        Instasamka
      </div>

      <div class="content__info-description">
        Caption of the post 😉<br>
        #fyp
      </div>

      <div class="content__info-tools">
        <div class="content__info-translation">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.5H4.51386C4.46089 2.40803 4.41116 2.31535 4.36529 2.22361C4.17017 1.83337 4 1.37136 4 1H5C5 1.12864 5.07983 1.41663 5.25971 1.77639C5.39453 2.04603 5.55967 2.30435 5.72134 2.5H10V3.5H7.96321C7.89643 3.98816 7.7415 4.54581 7.52123 5.11732C7.23184 5.86818 6.81693 6.67596 6.29626 7.43066C7.03156 8.13902 7.68034 8.67214 8.5 9L8 10C7.06403 9.53202 6.55014 9.04655 5.83506 8.37102C5.78614 8.32481 5.73628 8.2777 5.68528 8.22966C4.62175 9.48227 3.19189 10.5 1.5 10.5V9.5C2.81049 9.5 4.01807 8.67738 4.98808 7.50532C4.87863 7.37988 4.77251 7.25209 4.67006 7.12232C3.80916 6.03185 3.16779 4.75044 3.02834 3.5H1V2.5ZM4.03627 3.5H6.95149C6.89013 3.85637 6.77001 4.2858 6.58814 4.75768C6.34917 5.37772 6.01359 6.04501 5.59728 6.67843C5.54908 6.6204 5.50162 6.5618 5.45494 6.50268C4.68991 5.53364 4.17318 4.47079 4.03627 3.5ZM15.052 15H13.516L12.928 13.464H9.13599L8.54799 15H7.01199L10.156 6.996H11.908L15.052 15ZM12.532 12.228L11.032 8.184L9.53199 12.228H12.532Z" fill="white"/>
          </svg>

          Show translation
        </div>

        <div class="content__info-song">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7575 1.31063C12.3886 1.15285 13 1.63021 13 2.28078V11H12.9919C13.0956 11.7299 12.1933 12.548 10.8968 12.8693C9.53376 13.207 8.25119 12.8677 8.03206 12.1115C7.81293 11.3553 8.74023 10.4684 10.1032 10.1307C10.8004 9.95798 11.4765 9.96235 12 10.109V3.25L6 4.75V13H5.9919C6.09558 13.7299 5.1933 14.548 3.89677 14.8693C2.53377 15.207 1.25119 14.8677 1.03206 14.1115C0.812934 13.3553 1.74023 12.4684 3.10323 12.1307C3.80037 11.958 4.47647 11.9623 5 12.109V3.78078C5 3.32191 5.3123 2.92193 5.75746 2.81064L11.7575 1.31063Z" fill="white"/>
          </svg>
          <p>LIPSI HA - Instasamka</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  width: 100%;
  height: calc(100% - 84px);

  position: relative;

  &__video {
    width: 100%;
    height: 100%;
  }

  &__info {

    display: flex;
    flex-direction: column;
    gap: 6px;

    position: absolute;
    bottom: 10px;
    left: 15px;

    color: white;

    font-family: 'Proxima Nova';

    &-user {
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.01em;
    }

    &-description {
      font-weight: 600;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: -0.01em;
    }

    &-translation {

      display: flex;
      align-items: center;
      gap: 5px;

      font-weight: 600;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: -0.01em;
    }

    &-song {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      font-weight: 400;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: -0.01em;
    }
  }
}
</style>
