import { forwardRef } from 'react';
import Icon, { Props } from '../Icon';
import { ReactComponent } from './dot.svg?react';

const Dot = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon outline={ReactComponent} solid={ReactComponent} ref={ref} {...props} />
));

Dot.displayName = 'Dot';

export default Dot;
