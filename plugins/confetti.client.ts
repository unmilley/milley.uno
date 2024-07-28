import JSConfetti from 'js-confetti'
export default defineNuxtPlugin((nuxtApp) => {
  const confetti = new JSConfetti()
  return { provide: { confetti } }
})
