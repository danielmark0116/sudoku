import { TweenMax, Power1, Back, TimelineLite } from 'gsap/TweenMax';

export const animateBoard = (node, e) => {
  const boxHeight = node.offsetHeight;
  const boxMiddle = boxHeight / 2;
  const boxTopMargin = node.offsetTop;
  const mouseInsideElPosition = e.clientY - boxTopMargin;
  const boxHeightDelta = mouseInsideElPosition - boxMiddle;
  const screenMiddleX = window.innerWidth / 2;
  const transformPercentage = 0.003;
  const yTranslationValue = (screenMiddleX - e.clientX) * transformPercentage;
  const xTranslationValue = boxHeightDelta * transformPercentage;

  TweenMax.set(node, {
    transformPerspective: 400,
    transformOrigin: 'center center'
  });

  TweenMax.to(node, 0.7, {
    rotationY: yTranslationValue,
    rotationX: xTranslationValue,
    ease: Power1.easeOut
  });
};

export const boardReveal = node => {
  TweenMax.from(node, 0.5, {
    scale: 0,
    opacity: 0,
    rotation: -10,
    ease: Back.easeOut.config(1)
  });
};

export const boardNotSolved = node => {
  const t1 = new TimelineLite();
  const animationTime = 1;

  if (!t1._active) {
    t1.to(node, animationTime / 2, {
      scale: 0.99,
      borderColor: '#ff2f2f',
      ease: Power1.easeOut
    }).to(node, animationTime, {
      scale: 1,
      borderColor: 'transparent',
      ease: Power1.easeOut
    });
  }
};
