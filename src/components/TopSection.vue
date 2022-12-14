<script setup>
import LiveIcon from './Icons/LiveIcon.vue'
import SearchIcon from './Icons/SearchIcon.vue'
</script>

<template>
    <div class="top">
        <div class="top__icon">
            <LiveIcon/>
        </div>

        <div class="top__frame">
            <div class="top__text top__text_alert">
                Following
            </div>

            <div class="top__text top__text_active">
                For you
            </div>
        </div>

        <div class="top__icon">
            <SearchIcon/>
        </div>
    </div>
</template>

<style lang="scss">
    .top {
        width: 100%;

        display: flex;
        justify-content: space-between;

        padding: 0px 14px;

        position: absolute;
        top: 56px;
        left: 0;

        &__frame {
            display: flex;
            gap: 15px;
        }

        &__text {
            font-family: 'Proxima Nova';

            font-weight: 700;
            font-size: 18px;
            line-height: 22px;

            letter-spacing: -0.01em;

            color: #FFFFFF;

            opacity: 0.7;

            &_alert {
                position: relative;
                &::after {
                    content: '';

                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    right: -3.5px;
                    top: 0px;

                    background: #E94359;
                    z-index: 1;  
                }
            }

            &_active {
                position: relative;
                opacity: 1;
                &::before {
                    content: '';

                    position: absolute;
                    top: 27px;
                    left: 16px;
                    
                    width: 29px;
                    height: 4px ;
                    background: #FFFFFF;
                    z-index: 1;
                }
            }
        }
    }
</style>