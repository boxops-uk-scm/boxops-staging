import Flexbox from '@boxops/components-2/src/Flexbox';
import { padding } from '@boxops/components-2/src/tokens.stylex';

import * as stylex from '@stylexjs/stylex';
import React from 'react';

export type Props = Flexbox.Props;

const Slot = React.forwardRef<HTMLDivElement, Props>(({ style, ...props }, ref) => {
  return (
    <Flexbox ref={ref} justifyContent="center" alignItems="center" style={[styles.base, style]} {...props}></Flexbox>
  );
});

Slot.displayName = 'Slot';

export default Slot;

export const styles = stylex.create({
  base: {
    padding: padding.XS,
    borderRadius: '4px',
    backgroundImage:
      "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuXzk1dG14IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iOS41IiBoZWlnaHQ9IjkuNSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGxpbmUgeDE9IjAiIHk9IjAiIHgyPSIwIiB5Mj0iOS41IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+IDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybl85NXRteCkiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')",
    border: `1px dashed oklch(0% 0 0 / 30%)`,
  },
});
