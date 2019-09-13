import { TweenMax, Power1 } from 'gsap/TweenMax';

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
