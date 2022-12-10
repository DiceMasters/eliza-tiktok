<script setup>
import HomeIcon from './Icons/HomeIcon.vue'
import NowIcon from './Icons/NowIcon.vue'
import InboxIcon from './Icons/InboxIcon.vue'
import ProfileIcon from './Icons/ProfileIcon.vue'
import CreateButton from './CreateButton.vue'
import { reactive } from '@vue/reactivity'

const activeStates = reactive({
  home: true,
  now: false,
  inbox: false,
  profile: false
})

function onItemClick (mode) {
  activeStates[mode] = !activeStates[mode]
}
</script>

<template>
  <div class="navbar">
    <div class="navbar__item" @click="onItemClick('home')">
      <div class="navbar__icon">
        <HomeIcon :active="activeStates.home"/>
      </div>
      
      <span>
        Home
      </span>
    </div>

    <div class="navbar__item" @click="onItemClick('now')">
      <div class="navbar__icon">
        <NowIcon :active="activeStates.now"/>
      </div>
      
      <span>
        Now
      </span>

      <div class="navbar__item-notice">
        5
      </div>
    </div>

    <div class="navbar__item">
      <CreateButton/>
    </div>

    <div class="navbar__item" @click="onItemClick('inbox')">
      <div class="navbar__icon">
        <InboxIcon :active="activeStates.inbox"/>
      </div>

      <span>
        Inbox
      </span>

      <div class="navbar__item-notice">
        12
      </div>
    </div>

    <div class="navbar__item" @click="onItemClick('profile')">
      <div class="navbar__icon">
        <ProfileIcon :active="activeStates.profile" color="red"/>
      </div>

      <span>
        Profile
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  display: flex;
  align-self: center;
  justify-content: space-around;

  background-color: black;

  padding-top: 5px;

  &__item {
    position: relative;
    
    width: 45px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #BFBFBF;

    cursor: pointer;
  }

  &__icon {
    width: 28px;
    height: 28px;
  }

  &__item-notice {
    position: absolute;
    right: 0;
    top: 0;
    
    background: #E94359;

    padding: 2px 4px;
    border-radius: 40px;
    
    font-size: 12px;
    line-height: 11px;
    letter-spacing: unset;
    color: white;
  }
}
</style>