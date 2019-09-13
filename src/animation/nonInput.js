import { TweenMax, TimelineLite, Bounce } from 'gsap/TweenMax';

const t1 = new TimelineLite();

export const nonInputAnimation = node => {
  // TweenMax.set(node, { zIndex: 100 });
  if (!t1._active) {
    t1.from(node, 0.2, { x: -20, ease: Back.easeOut.config(4) });
  }
};
