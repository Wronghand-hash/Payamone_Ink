<template >
    <div class="w-full h-auto justify-center flex">
        <img v-show="selectedImg" class="h-96" :src="img" alt="">
        <img v-show="!selectedImg" class="" :src="img2" alt="">
    </div>
</template>


<script>
export default {
    data(){
        return{
            img: '/bull.png',
            img2: '/samurai.png',
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