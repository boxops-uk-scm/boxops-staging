import { forwardRef } from 'react';
import Icon, { Props } from '../Icon';
import { ReactComponent as Outline } from './outline.svg?react';
import { ReactComponent as Solid } from './solid.svg?react';

const Graph = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon outline={Outline} solid={Solid} ref={ref} {...props} />
));

Graph.displayName = 'Graph';

export default Graph;
