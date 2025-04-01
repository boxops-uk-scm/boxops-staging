import * as internal from './Item';

const Item = Object.assign(internal.default, {
  styles: internal.styles,
});

namespace Item {
  export type Props = internal.Props;
  export type RenderProps = internal.RenderProps;
}

export default Item;
