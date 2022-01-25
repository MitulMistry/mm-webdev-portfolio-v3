// Utility for ScrollReveal

import ScrollReveal from 'scrollreveal';

// Check if server side rendering, where window is unavailable
const isSSR = typeof window === 'undefined';
const scrollRevealUtil = isSSR ? null : ScrollReveal();

export default scrollRevealUtil;
