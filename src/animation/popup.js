import { TweenMax, TimelineLite, Bounce } from 'gsap/TweenMax';

const t1 = new TimelineLite();

export const animatePopup = node => {
  TweenMax.set(node, { zIndex: 101 });
  t1.from(node, 0.4, { width: 100, y: -20, ease: Bounce.easeOut });
};
