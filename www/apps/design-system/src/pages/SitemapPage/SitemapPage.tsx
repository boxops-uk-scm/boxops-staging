import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps, PageRoute, Route } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Flexbox, SideNav, Sitemap } from '@boxops/components-2';
import React from 'react';
import { semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';
import { RouterProvider } from '@boxops/router/src/useRouterConfig';

const Page: React.FC<EmptyEntryPointProps> = () => {
  const item: PageRoute = {
    type: 'page',
    title: 'Sitemap Item',
    description: 'Sitemap item descriptions are optional and a maximum of two lines.',
    path: '/design-system/sitemap-item',
  };

  const routes: Route[] = [
    {
      type: 'group',
      label: 'Social',
      children: Array.from({ length: 7 }, () => item),
    },
    {
      type: 'group',
      label: 'Entertainment',
      children: Array.from({ length: 3 }, () => item),
    },
    {
      type: 'group',
      label: 'Shopping',
      children: Array.from({ length: 2 }, () => item),
    },
    {
      type: 'group',
      label: 'Personal',
      children: Array.from({ length: 3 }, () => item),
    },
    {
      type: 'group',
      label: 'Professional',
      children: Array.from({ length: 1 }, () => item),
    },
    {
      type: 'group',
      label: 'Community Resources',
      children: Array.from({ length: 4 }, () => item),
    },
  ];

  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example>
          <Example.Demo>
            <RouterProvider routes={routes}>
              <Sitemap />
            </RouterProvider>
          </Example.Demo>
        </Example>
        <div {...stylex.props(styles.footer)} />
      </Flexbox>
      <div />
    </div>
  );
};

export default Page;

const styles = stylex.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr 800px 1fr',
    minHeight: '100vh',
    maxWidth: '100vw',
  },
  header: {
    paddingTop: '30px',
  },
  footer: {
    height: '200px',
  },
  brand: {
    color: semanticColor.accent,
  },
});
