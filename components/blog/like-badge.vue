<template>
  <div class="fixed bottom-16 left-[50%] z-[51] translate-x-[-50%]">
    <button
      type="button"
      @click="like()"
      class="btn btn-ghost btn-outline btn-sm bg-transparent backdrop-blur-sm hover:bg-base-100 hover:text-base-content min-w-max"
      :class="{ 'select-none pointer-events-none border-primary': isLiked }"
    >
      <Icon name="bx:bxs-heart" size="1.25rem" :class="[isLiked ? 'text-primary animate__heartBeat' : '']" />

      {{ isLoading ? '...' : likes ?? '-' }}

      <div class="h-4 mx-1 w-px bg-base-content"></div>

      {{ buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { slug } = defineProps<{ slug: string }>()
const { likes, isCurrentUserLike, isLoading, increment: like } = await usePostLikes(slug)

const isLiked = computed(() => isCurrentUserLike.value || isLoading.value)

const { $confetti } = useNuxtApp()
const { t } = useI18n()

const buttonText = computed(() => {
  return isCurrentUserLike.value ? t('blog.btn.thanks') + '!' : t('blog.btn.was-helpful') + '?'
})

watch(
  () => isCurrentUserLike.value,
  () => {
    $confetti.addConfetti()
    $confetti.addConfetti({
      emojis: ['🍪'],
      emojiSize: 50,
      confettiRadius: 10,
      confettiNumber: 100,
    })
  }
)
</script>

<style>
@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__heartBeat {
  --animate-duration: 1s;
  --animate-delay: 0.5s;
  --animate-repeat: 1;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;

  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);

  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;

  -webkit-animation-duration: calc(1s * 1.3);
  animation-duration: calc(1s * 1.3);

  -webkit-animation-duration: calc(var(--animate-duration) * 1.3);
  animation-duration: calc(var(--animate-duration) * 1.3);

  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;

  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;

  -webkit-animation-delay: var(--animate-delay);
  animation-delay: var(--animate-delay);
}
</style>
