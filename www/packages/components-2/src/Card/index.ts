import * as internal from './Card';
import * as internal_header from './Header';
import * as internal_footer from './Footer';

const Card = Object.assign(internal.default, {
  Header: internal_header.default,
  Footer: internal_footer.default,
  styles: internal.styles,
});

namespace Card {
  export type Props = internal.Props;
  export namespace Header {
    export type Props = internal_header.default.Props;
  }
  export namespace Footer {
    export type Props = internal_footer.default.Props;
  }
}

export default Card;
