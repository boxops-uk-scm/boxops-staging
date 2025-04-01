import * as internal from './ToggleButton';
import * as internal_uncontrolled from './Uncontrolled';

const ToggleButton = Object.assign(internal.default, {
  Uncontrolled: internal_uncontrolled.default,
  styles: internal.styles,
  variants: internal.variants,
});

namespace ToggleButton {
  export type Props = internal.Props;
}

export default ToggleButton;
