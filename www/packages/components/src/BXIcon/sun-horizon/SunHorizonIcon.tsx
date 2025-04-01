import { BXIcon, BXIconProps } from '../BXIcon';
import { ReactComponent as Outline } from './outline.svg';
import { ReactComponent as Solid } from './solid.svg';

const SunHorizonIcon = (props: BXIconProps) => <BXIcon outline={Outline} solid={Solid} {...props} />;

export default SunHorizonIcon;
