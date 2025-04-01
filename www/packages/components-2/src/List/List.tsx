import { forwardRef } from 'react';
import Flexbox from '../Flexbox';

export type Props = Omit<Flexbox.Props, 'direction'>;

const List = forwardRef<HTMLDivElement, Props>((props, ref) => <Flexbox ref={ref} {...props} direction="column" />);

List.displayName = 'List';

export default List;
