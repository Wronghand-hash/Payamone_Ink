<template >
    <div class="w-full h-auto justify-center flex">
        <img v-show="selectedImg" class="" :src="img" alt="">
        <img v-show="!selectedImg" :src="img2" alt="">
    </div>
</template>


<script>
export default {
    data(){
        return{
            img: '/moth.png',
            img2: '/snake.png',
            selectedImg: true 
        }
    },
    methods: {
        togImg(){
            this.selectedImg = !this.selectedImg
        }
    }
}
</script>