import * as internal from './MetadataList';
import * as internal_label from './Label';

const MetadataList = Object.assign(internal.default, {
  Label: internal_label.default,
  styles: internal.styles,
});

namespace MetadataList {
  export type Props = internal.Props;
  export namespace Label {
    export type Props = internal_label.default.Props;
  }
}

export default MetadataList;
