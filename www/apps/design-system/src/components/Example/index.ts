import { Flexbox } from '@boxops/components-2';
import * as internal from './Example';

const Example = Object.assign(internal.default, {
  Demo: internal.Demo,
  styles: internal.styles,
});

namespace Example {
  export type Props = internal.Props;
  export namespace Demo {
    export type Props = Flexbox.Props;
  }
}

export default Example;
