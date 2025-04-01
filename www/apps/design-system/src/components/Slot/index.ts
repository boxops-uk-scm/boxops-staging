import { Flexbox } from '@boxops/components-2';
import * as internal from './Slot';

const Slot = Object.assign(internal.default, {
  styles: internal.styles,
});

namespace Slot {
  export type Props = internal.Props;
  export namespace Demo {
    export type Props = Flexbox.Props;
  }
}

export default Slot;
