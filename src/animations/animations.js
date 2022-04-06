export const slideIn = {
    initial: {
        x: -1000,
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.25,
            type: 'spring',
            damping: 25,
            stiffness: 100,
        },
    },
    exit: {
        x: 1000
    }
};