import Router, { RouterConfig } from '@boxops/router';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';
import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import tasksPageEntryPoint from './pages/tasksPage.entrypoint';
import { relayEnvironment } from './relayEnvironment';


const EmptyPage = () => <></>;

const emptyEntrypoint: SimpleEntryPoint<typeof EmptyPage> = {
  root: JSResource('Empty', async () => {
    return EmptyPage;
  }),
  getPreloadProps: () => ({}),
};

const routerConfig: RouterConfig = [
  {
    type: 'page',
    path: '/tasks',
    entryPoint: tasksPageEntryPoint,
    title: 'Tasks',
  },
  {
    type: 'group',
    label: 'Overview',
    children: [
      {
        type: 'page',
        path: '/intro',
        entryPoint: emptyEntrypoint,
        title: 'Introduction',
        description: 'A quick guide to getting started with Base UI.',
      },
      {
        type: 'page',
        path: '/install',
        entryPoint: emptyEntrypoint,
        title: 'Getting Started',
        description: 'Learn how to install and use Base UI in your project.',
      },
      {
        type: 'page',
        path: '/accessibility',
        entryPoint: emptyEntrypoint,
        title: 'Accessibility',
        description: "Learn how to make the most of Base UI's accessibility features and guidelines.",
      },
      {
        type: 'page',
        path: '/releases',
        entryPoint: emptyEntrypoint,
        title: 'Releases',
        description: 'Changelogs for each Base UI release.',
      },
    ],
  },
  {
    type: 'group',
    label: 'Guides',
    children: [
      {
        type: 'page',
        path: '/styles',
        entryPoint: emptyEntrypoint,
        title: 'Styling',
        description: 'A guide to styling Base UI components with your preferred styling engine.',
      },
      {
        type: 'page',
        path: '/animation',
        entryPoint: emptyEntrypoint,
        title: 'Animation',
        description: 'A guide to animating Base UI components.',
      },
      {
        type: 'page',
        path: '/composition',
        entryPoint: emptyEntrypoint,
        title: 'Composition',
        description: 'A guide to composing Base UI components with your own React components.',
      },
    ],
  },
  {
    type: 'group',
    label: 'Components',
    children: [
      {
        type: 'page',
        path: 'components/accordion',
        entryPoint: emptyEntrypoint,
        title: 'Accordion',
        description:
          'A vertically stacked set of interactive headings that each reveal an associated section of content.',
      },
      {
        type: 'page',
        path: 'components/alert-dialog',
        entryPoint: emptyEntrypoint,
        title: 'Alert Dialog',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
        type: 'page',
        path: 'components/avatar',
        entryPoint: emptyEntrypoint,
        title: 'Aspect Ratio',
        description: 'An image element with a fallback for representing the user.',
      },
      {
        type: 'page',
        path: 'components/badge',
        entryPoint: emptyEntrypoint,
        title: 'Avatar',
        description: 'An easily stylable checkbox component.',
      },
      {
        type: 'page',
        path: 'components/checkbox',
        entryPoint: emptyEntrypoint,
        title: 'Checkbox',
        description: 'A control that allows the user to toggle between checked and not checked.',
      },
      {
        type: 'page',
        path: 'components/collapsible',
        entryPoint: emptyEntrypoint,
        title: 'Collapsible',
        description: 'An interactive component which expands/collapses a panel.',
      },
      {
        type: 'page',
        path: 'components/context-menu',
        entryPoint: emptyEntrypoint,
        title: 'Context Menu',
        description: 'Displays a menu located at the pointer, triggered by a right click or a long press.',
      },
      {
        type: 'page',
        path: 'components/dialog',
        entryPoint: emptyEntrypoint,
        title: 'Dialog',
        description:
          'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
      },
      {
        type: 'page',
        path: 'components/dropdown-menu',
        entryPoint: emptyEntrypoint,
        title: 'Dropdown Menu',
        description: 'Displays a menu to the user—such as a set of actions or functions—triggered by a button.',
      },
      {
        type: 'page',
        path: 'components/form',
        entryPoint: emptyEntrypoint,
        title: 'Form',
        description: 'Collect information from your users using validation rules.',
      },
      {
        type: 'page',
        path: 'components/hover-card',
        entryPoint: emptyEntrypoint,
        title: 'Hover Card',
        description: 'For sighted users to preview content available behind a link.',
      },
      {
        type: 'page',
        path: 'components/label',
        entryPoint: emptyEntrypoint,
        title: 'Label',
        description: 'Renders an accessible label associated with controls.',
      },
      {
        type: 'page',
        path: 'components/menu',
        entryPoint: emptyEntrypoint,
        title: 'Menu',
        description:
          'A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.',
      },
      {
        type: 'page',
        path: 'components/navigation-menu',
        entryPoint: emptyEntrypoint,
        title: 'Navigation Menu',
        description: 'A collection of links for navigating websites.',
      },
      {
        type: 'page',
        path: 'components/popover',
        entryPoint: emptyEntrypoint,
        title: 'Popover',
        description: 'Displays rich content in a portal, triggered by a button.',
      },
      {
        type: 'page',
        path: 'components/progress',
        entryPoint: emptyEntrypoint,
        title: 'Progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        type: 'page',
        path: 'components/radio-group',
        entryPoint: emptyEntrypoint,
        title: 'Radio Group',
        description:
          'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
      },
      {
        type: 'page',
        path: 'components/scroll-area',
        entryPoint: emptyEntrypoint,
        title: 'Scroll Area',
        description: 'Augments native scroll functionality for custom, cross-browser styling.',
      },
      {
        type: 'page',
        path: 'components/select',
        entryPoint: emptyEntrypoint,
        title: 'Select',
        description: 'Displays a list of options for the user to pick from—triggered by a button.',
      },
      {
        type: 'page',
        path: 'components/separator',
        entryPoint: emptyEntrypoint,
        title: 'Separator',
        description: 'Visually or semantically separates content.',
      },
      {
        type: 'page',
        path: 'components/slider',
        entryPoint: emptyEntrypoint,
        title: 'Slider',
        description: 'An input where the user selects a value from within a given range.',
      },
      {
        type: 'page',
        path: 'components/switch',
        entryPoint: emptyEntrypoint,
        title: 'Switch',
        description: 'A control that allows the user to toggle between checked and not checked.',
      },
      {
        type: 'page',
        path: 'components/tabs',
        entryPoint: emptyEntrypoint,
        title: 'Tabs',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
      {
        type: 'page',
        path: 'components/toast',
        entryPoint: emptyEntrypoint,
        title: 'Toast',
        description: 'A succinct message that is displayed temporarily.',
      },
      {
        type: 'page',
        path: 'components/toggle',
        entryPoint: emptyEntrypoint,
        title: 'Toggle',
        description: 'A two-state button that can be either on or off.',
      },
      {
        type: 'page',
        path: 'components/toggle-group',
        entryPoint: emptyEntrypoint,
        title: 'Toggle Group',
        description: 'A set of two-state buttons that can be toggled on or off.',
      },
      {
        type: 'page',
        path: 'components/toolbar',
        entryPoint: emptyEntrypoint,
        title: 'Toolbar',
        description: 'A set of two-state buttons that can be toggled on or off.',
      },
      {
        type: 'page',
        path: 'components/tooltip',
        entryPoint: emptyEntrypoint,
        title: 'Tooltip',
        description: 'A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.',
      },
    ],
  },
];

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense>
        <Router config={routerConfig} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
