import { TweenMax, TimelineLite, Power1, Power2, Bounce } from 'gsap/TweenMax';

// const t1 = new TimelineLite();

// const easing = Back.easeOut.config(4);

export const revealAnimation = (node, delayInSeconds) => {
  TweenMax.from(node, 0.5, {
    y: 30,
    opacity: 0,
    scale: 0.9,
    ease: Back.easeOut.config(1)
  }).delay(delayInSeconds);
};

export const revealFadeIn = (node, delayInSeconds) => {
  TweenMax.set(node, { opacity: 0, y: 10 });

  TweenMax.to(node, 2, {
    y: 0,
    opacity: 1,
    ease: Power2.easeOut
  }).delay(delayInSeconds);
};
