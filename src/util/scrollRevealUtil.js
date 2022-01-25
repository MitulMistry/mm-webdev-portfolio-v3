// Utility for ScrollReveal

import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const scrollRevealUtil = isSSR ? null : ScrollReveal();

export default scrollRevealUtil;
