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
            duration: 2,
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

// phone animation settings
export const screenLiftOff = {
    initial: {
        opacity: 1
    },
    animate: {
        y: -300,
        opacity: 0,
        transition: {
            delay: 1,
            duration: 0.5,
            type: 'spring',
            damping: 25,
            stiffness: 100
        }
    },
    exit: {
        opacity: 0
    }
};

export const screenPlaceOn = {
    initial: {
        opacity: 0,
        y: -300,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2,
            duration: 0.5,
            type: 'spring',
            damping: 25,
            stiffness: 100
        }
    }
};