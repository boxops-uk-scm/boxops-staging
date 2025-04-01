import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';
import { backgroundColor, padding } from '../tokens.stylex';
import { PageRoute, useMatch, usePrefetchLinkHandlers, useRouterConfig } from '@boxops/router';
import { Text, Avatar, Flexbox, Heading, Icon, List, Sitemap } from '..';
import * as HoverCard from '@radix-ui/react-hover-card';
import { matchPath } from 'react-router';

const SideNav = forwardRef<HTMLDivElement, object>((_, ref) => {
  const { routes } = useRouterConfig();
  const [onMouseEnter, onClick] = usePrefetchLinkHandlers('/design-system');
  return (
    <Flexbox style={styles.base} direction="column" gap="XL">
      <Flexbox direction="column" alignItems="center" style={styles.header}>
        <HoverCard.Root openDelay={800}>
          <HoverCard.Trigger onClick={onClick} onMouseEnter={onMouseEnter}>
            <Avatar size="XXL" darkenOnHover>
              <Avatar.Icon src={Icon.Package} />
            </Avatar>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content side="top" sideOffset={5} {...stylex.props(styles.popover)}>
              <Sitemap />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <Heading as="h1" style={styles.unselectable}>
          Boxops
        </Heading>
        <Text as="small" variant="subtle" style={styles.unselectable}>
          Design System
        </Text>
      </Flexbox>
      <List ref={ref} style={styles.routes}>
        {routes
          .filter((route) => !('hideFromNav' in route && route.hideFromNav))
          .map((route, index) => {
            switch (route.type) {
              case 'group':
                return (
                  <div key={index} {...stylex.props(styles.groupHeading)}>
                    <Heading style={[styles.heading, styles.unselectable]}>{route.label}</Heading>
                    {route.children.map((subRoute, subIndex) => (
                      <Item key={subIndex} route={subRoute} />
                    ))}
                  </div>
                );
              case 'page':
                return <Item key={index} route={route} />;
            }
          })}
      </List>
    </Flexbox>
  );
});

SideNav.displayName = 'SideNav';

export default SideNav;

const Item = ({ route }: { route: PageRoute }) => {
  const currentLocation = useMatch();
  const match = matchPath({ path: route.path!, end: true }, currentLocation.path!);
  const isSelected = !!match;

  const [onMouseEnter, onClick] = usePrefetchLinkHandlers(route.path!);

  // const ref = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   if (isSelected && ref && 'current' in ref && ref.current) {
  //     ref.current.scrollIntoView({ block: 'nearest', inline: 'end' });
  //   }
  // }, []);

  return (
    <List.Item
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      onMouseDown={onClick}
      isSelected={isSelected}
      // ref={ref}
      style={styles.item}
      label={route.title}
    />
  );
};

Item.displayName = 'Item';

export const styles = stylex.create({
  base: {
    backgroundColor: backgroundColor.card,
    borderWidth: '0px',
    borderRightWidth: '2px',
    borderStyle: 'solid',
    borderColor: backgroundColor.secondary,
    position: 'sticky',
    top: 0,
    // maxHeight: '100vh',
    paddingLeft: padding.S,
    paddingRight: padding.S,
  },
  header: {
    paddingTop: padding.L,
  },
  item: {
    cursor: 'pointer',
  },
  unselectable: {
    userSelect: 'none',
  },
  popover: {
    zIndex: 100,
  },
  routes: {
    overflowY: 'auto',
  },
  groupHeading: {
    paddingTop: padding.M,
    paddingBottom: padding.M,
  },
  heading: {
    paddingBottom: padding.S,
  },
});
