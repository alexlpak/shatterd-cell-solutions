export const smoothScrollToElement = (selector) => {
    const headerOffset = document.querySelector('header').getBoundingClientRect().height;
    const elementTop = document.querySelector(selector).getBoundingClientRect().top;
    const targetY = elementTop+window.pageYOffset-headerOffset;
    window.scrollTo({ behavior: 'smooth', top: targetY });
};

export const smoothScrollToTop = () => window.scrollTo({ behavior: 'smooth', top: 0 });