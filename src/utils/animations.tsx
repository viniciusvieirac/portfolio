export const sectionWithFade = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
             ease: [0.6, 0.01, 0.05, 0.95],
             duration: 0.7,
        }
    }
}