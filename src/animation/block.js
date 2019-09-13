import {
  TweenMax,
  TimelineLite,
  Power2,
  Elastic,
  CSSPlugin,
  Bounce
} from 'gsap/TweenMax';

export const animateBlock = (node, bool) => {
  const scale = { scale: bool ? 1.05 : 1 };
  TweenMax.set(node, { zIndex: bool ? 10 : 2 });
  TweenMax.to(node, 0.4, {
    ...scale,
    ease: Back.easeOut.config(4)
  });
};

export const bringToBack = nodes => {
  nodes.forEach(node => {
    TweenMax.set(node, { zIndex: 1 });
  });
};
