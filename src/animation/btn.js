import { TweenMax, TimelineLite, Power1 } from 'gsap/TweenMax';

const t1 = new TimelineLite();

const easing = Back.easeOut.config(4);

export const btnPush = node => {
  t1.to(node, 0.2, { scale: 0.9, ease: easing });
};

export const btnScale = node => {
  t1.to(node, 0.2, { scale: 1.5, ease: easing });
};

export const resetBtn = node => {
  TweenMax.to(node, 0.7, { scale: 1, ease: easing });
};

export const btnUp = node => {
  if (!t1._active) {
    t1.to(node, 0.05, {
      scale: 1,
      rotation: 0
    })
      .to(node, 0.05, { scale: 1.3, rotation: 15 })
      .to(node, 1, { scale: 1, rotation: 0, ease: easing });
  } else {
    TweenMax.to(node, 0.2, { scale: 1, ease: Power1.easeIn });
  }
};
