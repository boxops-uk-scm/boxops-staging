import * as internal from './Badge';
import * as internal_dot from './Dot';

const Badge = Object.assign(internal.default, {
  Dot: internal_dot.default,
  styles: internal.styles,
  variants: internal.variants,
});

namespace Badge {
  export type Props = internal.Props;
}

export default Badge;
