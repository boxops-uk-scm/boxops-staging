import Item from './Item';
import * as internal from './List';

const List = Object.assign(internal.default, {
  Item,
});

namespace List {
  export type Props = internal.Props;
}

export default List;
