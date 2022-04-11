export const slideInLeft = {
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

export const slideInRight = {
    initial: {
        x: 1000,
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
        x: -1000
    }
};

export const slideDown = {
    initial: { y: -100 },
    animate: {
        y: 0,
        transition: {
            duration: 0.25,
            type: 'spring',
            damping: 25,
            stiffness: 100
        }
    },
    exit: {
        y: 100
    }
}

export const fadeInOut = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};