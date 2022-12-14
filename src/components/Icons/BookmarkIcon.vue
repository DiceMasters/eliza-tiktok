<script setup>
const props = defineProps({
    active: Boolean
})
</script>

<template>
    <div class="icon">
        <svg v-if="props.active" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5.16505C4 4.0687 4.89543 3.17993 6 3.17993H24C25.1046 3.17993 26 4.0687 26 5.16505V26.1858C26 26.969 25.1289 27.4436 24.4631 27.0231L15.5369 21.3851C15.2093 21.1782 14.7907 21.1782 14.4631 21.3851L5.53688 27.0231C4.87115 27.4436 4 26.969 4 26.1858V5.16505Z" fill="#F9CE13"/>
        </svg>

        <svg v-else width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4.98512C4 3.88877 4.89543 3 6 3H24C25.1046 3 26 3.88877 26 4.98512V26.0058C26 26.7891 25.1289 27.2637 24.4631 26.8432L15.5369 21.2051C15.2093 20.9982 14.7907 20.9982 14.4631 21.2051L5.53688 26.8432C4.87115 27.2637 4 26.7891 4 26.0058V4.98512Z" fill="white"/>
        </svg>
    </div>
</template>