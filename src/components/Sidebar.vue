<script setup>
    import LikeIcon from './Icons/LikeIcon.vue'
    import CommentsIcon from './Icons/CommentsIcon.vue'
    import BookmarkIcon from './Icons/BookmarkIcon.vue'
    import ShareIcon from './Icons/ShareIcon.vue'
</script>

<template>
    <div class="sidebar">
        <div class="sidebar__item">
            <div class="sidebar__avatar">
                <div class="sidebar__avatar-icon">
                    <img src="https://i.pravatar.cc/300" alt="">
                </div>

                <div class="sidebar__avatar-follow">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C4.44772 0 4 0.447715 4 1V4L1 4C0.447715 4 0 4.44771 0 5C0 5.55228 0.447715 6 1 6H4V9C4 9.55229 4.44772 10 5 10C5.55228 10 6 9.55228 6 9V6H9C9.55228 6 10 5.55229 10 5C10 4.44772 9.55228 4 9 4L6 4V1C6 0.447715 5.55228 0 5 0Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>

        <div class="sidebar__item">
            <div class="sidebar__icon">
                <LikeIcon/>
            </div>

            <span>
                250,5K
            </span>
        </div>

        <div class="sidebar__item">
            <div class="sidebar__icon">
                <CommentsIcon/>
            </div>

            <span>
                100K
            </span>
        </div>

        <div class="sidebar__item">
            <div class="sidebar__icon">
                <BookmarkIcon/>
            </div>

            <span>
                89K
            </span>
        </div>

        <div class="sidebar__item">
            <div class="sidebar__icon">
                <ShareIcon/>
            </div>

            <span>
                132,5K
            </span>
        </div>
        
        <div class="sidebar__item">
            <div class="sidebar__audio">
                <div class="sidebar__audio-disk">
                    <div class="sidebar__audio-label">
                        <img src="https://freshpic.art/img/2022-09/28/i6ol82scja17tjtb68nfvt2xk.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    position: absolute;
    right: 10px;
    bottom: 94px;
    &__avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__avatar-icon {
        position: relative;

        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid white;
        overflow: hidden;
        background-color: white;
    
        img {
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }
    &__avatar-follow {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 24px;
        height: 24px;

        border-radius: 50%;
        background: #E94359;
        margin-top: -15px;
        z-index: 1;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
            font-family: 'Proxima Nova';
            font-weight: 600;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            letter-spacing: -0.01em;

            color: #FFFFFF;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
        }
    }

    &__icon {
        width: 30px;
        height: 30px;

        margin-bottom: 10px;

        svg {
            filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
        }
    }

    &__audio-disk {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(180deg, #505050 0%, #181818 50%, #505050 100%); 

        animation-name: spin;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &__audio-label {
        width: 24px;
        height: 24px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;  
        }
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>