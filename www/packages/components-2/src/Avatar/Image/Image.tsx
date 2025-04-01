import React from 'react';
import * as stylex from '@stylexjs/stylex';

export interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'style'> {
  style?: stylex.StyleXStyles;
}

export const Image = React.forwardRef<HTMLImageElement, Props>(({ style, ...props }, ref) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const onLoad = React.useCallback(() => setIsLoaded(true), []);
  return (
    <>
      <img
        onLoad={onLoad}
        ref={ref}
        {...props}
        {...stylex.props(styles.base, isLoaded ? styles.visible : styles.hidden, style)}
      />
      <div {...stylex.props(styles.fallback, isLoaded ? styles.hidden : styles.visible)} />
    </>
  );
});

Image.displayName = 'Avatar.Image';

export default Image;

const shimmer = stylex.keyframes({
  to: {
    backgroundPositionX: '-300%',
  },
});

export const styles = stylex.create({
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'block',
  },
  fallback: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: `linear-gradient(to right, rgba(206, 230, 255, 0.4) 0%, rgba(245,206,230,0.25) 48%, rgba(245,206,230,0.25) 52%, rgba(206, 230, 255, 0.4) 100%);`,
    backgroundSize: '300%',
    backgroundPositionX: '300%',
    animation: `${shimmer} 4s infinite linear`,
  },
  base: {
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: '0px 0px',
  },
});
