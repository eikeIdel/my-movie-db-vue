<script setup>
import { ref, computed } from 'vue'

defineProps({
    isFav: Boolean,
    heartColor: String,
    heartClick: Function,
})

</script>
<template>
    <div class="wrapper">
        <div @click="heartClick" :style="heartColor" id="heart"></div>
    </div>
</template>


<style scoped>
.wrapper {
    position: absolute;
    top: 1rem;
    right: 3rem;
}

#heart {
    position: relative;
    --color: rgb(143, 141, 141);
}

#heart:hover {
    filter: brightness(1.1);
}


#heart:before,
#heart:after {
    position: absolute;
    content: "";
    left: 17px;
    top: 0;
    width: 18px;
    height: 27px;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    background-color: var(--color);
}

#heart:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;

}
</style>