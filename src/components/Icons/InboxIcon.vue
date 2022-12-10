<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="icon">
    <svg v-if="props.active" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C4.89543 6 4 6.89543 4 8V20C4 21.1046 4.89543 22 6 22H11L13.2 24.9333C13.6 25.4667 14.4 25.4667 14.8 24.9333L17 22H22C23.1046 22 24 21.1046 24 20V8C24 6.89543 23.1046 6 22 6H6ZM10.5 13C10.2239 13 10 13.2239 10 13.5V14.5C10 14.7761 10.2239 15 10.5 15H17.5C17.7761 15 18 14.7761 18 14.5V13.5C18 13.2239 17.7761 13 17.5 13H10.5Z" fill="white"/>
    </svg>


    <svg v-else width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20H16L15.4 20.8L14 22.6667L12.6 20.8L12 20H11H6V8H22V20H17ZM22 22H17L14.8 24.9333C14.4 25.4667 13.6 25.4667 13.2 24.9333L11 22H6C4.89543 22 4 21.1046 4 20V8C4 6.89543 4.89543 6 6 6H22C23.1046 6 24 6.89543 24 8V20C24 21.1046 23.1046 22 22 22ZM10.5 13C10.2239 13 10 13.2239 10 13.5V14.5C10 14.7761 10.2239 15 10.5 15H17.5C17.7761 15 18 14.7761 18 14.5V13.5C18 13.2239 17.7761 13 17.5 13H10.5Z" fill="#BFBFBF"/>
    </svg>
  </div>
</template>