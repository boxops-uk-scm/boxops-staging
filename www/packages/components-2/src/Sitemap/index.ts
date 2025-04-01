import * as internal from './Sitemap';
import * as internal_item from './Item';
import * as internal_section from './Section';

const Sitemap = Object.assign(internal.default, {
  Item: internal_item.default,
  Section: internal_section.default,
  styles: internal.styles,
});

namespace Sitemap {
  export type Props = internal.Props;
  export namespace Item {
    export type Props = internal_item.default.Props;
  }
  export namespace Section {
    export type Props = internal_section.default.Props;
  }
}

export default Sitemap;
