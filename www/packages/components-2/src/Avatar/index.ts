import * as internal from './Avatar';
import * as internal_image from './Image';
import * as internal_initials from './Initials';
import * as internal_icon from './Icon';

const Avatar = Object.assign(internal.default, {
  Image: internal_image.default,
  Initials: internal_initials.default,
  Icon: internal_icon.default,
  styles: internal.styles,
});

namespace Avatar {
  export type Props = internal.Props;
  export type Size = internal.Size;
  export namespace Image {
    export type Props = internal_image.default.Props;
  }
  export namespace Initials {
    export type Props = internal_initials.default.Props;
  }
  export namespace Icon {
    export type Props = internal_icon.default.Props;
  }
}

export default Avatar;
