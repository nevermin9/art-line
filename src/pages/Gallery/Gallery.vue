<script lang="ts" setup>
import { computed, onMounted, reactive, ref, Ref } from "vue";

const COUNT = 5;
const room = ref<HTMLElement | null>(null);
const roomWidth = ref<number>(0);
const dashOffset = ref<number>(0)
const lines = ref<[] | []>([]);
const linesByIndex = reactive(new Map())
const linee = ref<HTMLElement[]>([]);
const createGroupsByIndex = (_lines: Ref<[]>) => {
    for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        linesByIndex.set(i, [
            // left, middle, right
            lines.value[i3 + 0],
            lines.value[i3 + 1],
            lines.value[i3 + 2],
        ]);
    }
}

const animate = (t?: number) => {
    // const current = parseInt(linee.value[0].getAttribute("stroke-dashoffset") || "", 10);
    dashOffset.value -= 1;
    if (dashOffset.value == null || dashOffset.value <= 0) {
        return;
    }
    requestAnimationFrame(animate);
}

const clickHandler = (i: number) => {
    // console.dir();
    // const
    animate();
}

// const 
onMounted(() => {
    createGroupsByIndex(lines);
    roomWidth.value = dashOffset.value = room.value!.getBoundingClientRect().width;
})




</script>

<template>
    <section class="gallery" >
        <h1>
            i am gallery
        </h1>
        <router-link :to="{ name: 'Home' }">
            home
        </router-link>

        <article
            ref="room"
            class="gallery__room"
        >
            <div
                v-for="i in COUNT"
                class="gallery__artwork-box"
            >
                <!-- <img
                    class="gallery__artwork-img"
                    :key="pic.id"
                    :src="getImageLink(pic.image_id)"
                    :alt="pic.title"
                > -->
                <!-- <template v-if="index === 0"> -->
                    <div class="gallery__test">
                        <div
                            class="gallery__test-inner"
                            @click="() => clickHandler(i-1)"
                        />
                    </div>

                <!-- </template> -->
            </div>
        </article>

        <div class="gallery__line-box" :style="`width: ${roomWidth}px`">
                <!-- viewBox="0 0 250 175" -->
            <svg
                id="svg-box"
                :viewBox="`0 0 ${roomWidth} 50`"
            >
                    <!-- ref="lines" -->
                <line
                    ref="linee"
                    stroke="#fff"
                    :stroke-dasharray="roomWidth"
                    :stroke-dashoffset="dashOffset"
                    stroke-width="2"
                    x1="0"
                    y1="25"
                    :x2="roomWidth"
                    y2="25"
                />
            </svg>

        </div>
    </section>
</template>

<style lang="scss">
.gallery {
    flex: 1;

    &__room {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    &__artwork-box {
        flex-basis: 250px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        height: 375px;
        border: 1px solid #fff;
    }

    &__test {
        width: 100%;
        height: 200px;
        padding: 20px;

    }

    &__test-inner {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: transform .3s;
        background-color: #56fc99;

        &:hover {
            transform: scale(1.1);
        }

    }

    &__line-box {
        height: 100px;
    }

    & #svg-box {
        height: 100%;
        width: 100%;
        background-color: grey;
    }

    &__artwork-img {
        // position: absolute;
        // top: 0;
        // left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

#svg-box {
    $dur: 0.5s;

    @mixin line-animation {
        animation-name: line-animation;
        animation-duration: $dur;
        animation-fill-mode: forwards;
    }

    .line-start {
        @include line-animation();
        animation-delay: $dur;
    }

    .line-end {
        @include line-animation();
    }

    .line-animation {
        animation-delay: 2s;
    }

    @keyframes line-animation {
        0% {
            stroke-dashoffset: 125;
        }

        100% {
            stroke-dashoffset: 0;
        }
    }

}

</style>