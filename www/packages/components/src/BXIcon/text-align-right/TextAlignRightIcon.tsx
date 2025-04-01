import { BXIcon, BXIconProps } from '../BXIcon';
import { ReactComponent as Outline } from './outline.svg';
import { ReactComponent as Solid } from './solid.svg';

const TextAlignRightIcon = (props: BXIconProps) => <BXIcon outline={Outline} solid={Solid} {...props} />;

export default TextAlignRightIcon;
