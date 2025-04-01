import { relayEnvironment } from './relayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import { Suspense } from 'react';
import { RouterProvider } from '@boxops/router/src/useRouterConfig';
import Router, { Route } from '@boxops/router';

import homePage from './pages/HomePage/HomePage.entrypoint';
import avatarPage from './pages/AvatarPage/AvatarPage.entrypoint';
import badgePage from './pages/BadgePage/BadgePage.entrypoint';
import buttonGroupPage from './pages/ButtonGroupPage/ButtonGroupPage.entrypoint';
import buttonPage from './pages/ButtonPage/ButtonPage.entrypoint';
import cardPage from './pages/CardPage/CardPage.entrypoint';
import checkboxPage from './pages/CheckboxPage/CheckboxPage.entrypoint';
import copyButtonPage from './pages/CopyButtonPage/CopyButtonPage.entrypoint';
import dateTimePage from './pages/DateTimePage/DateTimePage.entrypoint';
import flexboxPage from './pages/FlexboxPage/FlexboxPage.entrypoint';
import headingPage from './pages/HeadingPage/HeadingPage.entrypoint';
import linkPage from './pages/LinkPage/LinkPage.entrypoint';
import listPage from './pages/ListPage/ListPage.entrypoint';
import metadataListPage from './pages/MetadataListPage/MetadataListPage.entrypoint';
import meterPage from './pages/MeterPage/MeterPage.entrypoint';
import sitemapPage from './pages/SitemapPage/SitemapPage.entrypoint';
import spinnerPage from './pages/SpinnerPage/SpinnerPage.entrypoint';
import statusDotPage from './pages/StatusDotPage/StatusDotPage.entrypoint';
import textPage from './pages/TextPage/TextPage.entrypoint';
import toggleButtonPage from './pages/ToggleButtonPage/ToggleButtonPage.entrypoint';
import tooltipPage from './pages/TooltipPage/TooltipPage.entrypoint';
import richTextAreaPage from './pages/RichTextAreaPage/RichTextAreaPage.entrypoint';

const routes: Route[] = [
  homePage,
  {
    type: 'group',
    label: 'Typography',
    children: [headingPage, textPage, dateTimePage],
  },
  {
    type: 'group',
    label: 'Components',
    children: [buttonPage, buttonGroupPage, copyButtonPage, toggleButtonPage, linkPage, spinnerPage],
  },
  {
    type: 'group',
    label: 'Communications',
    children: [statusDotPage, badgePage, avatarPage, tooltipPage],
  },
  {
    type: 'group',
    label: 'Inputs',
    children: [checkboxPage, richTextAreaPage],
  },
  {
    type: 'group',
    label: 'Lists',
    children: [listPage, metadataListPage],
  },
  {
    type: 'group',
    label: 'Navigation',
    children: [sitemapPage],
  },
  {
    type: 'group',
    label: 'Containers',
    children: [flexboxPage, cardPage],
  },
  {
    type: 'group',
    label: 'Data Visualization',
    children: [meterPage],
  },
];

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense>
        <RouterProvider routes={routes}>
          <Router />
        </RouterProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
