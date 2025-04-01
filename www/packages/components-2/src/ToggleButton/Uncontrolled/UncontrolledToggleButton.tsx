import '../../tokens.stylex.ts';

import React from 'react';
import { default as ToggleButton } from '../ToggleButton';
import type { Props } from '../ToggleButton';

const UncontrolledToggleButton = React.forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
  const [isSelected, setIsSelected] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsSelected((prev) => !prev);
  }, [setIsSelected]);

  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e);
      if (!e.isDefaultPrevented()) toggle();
    },
    [props.onClick, toggle],
  );

  return <ToggleButton {...props} isSelected={isSelected} onClick={onClick} ref={ref} />;
});

UncontrolledToggleButton.displayName = 'UncontrolledToggleButton';

export default UncontrolledToggleButton;
