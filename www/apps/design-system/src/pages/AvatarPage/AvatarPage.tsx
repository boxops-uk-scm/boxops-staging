import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Avatar, Flexbox, Icon, SideNav, Text } from '@boxops/components-2';
import React from 'react';
import { gap, semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';

const exampleInitials = [
  'JM',
  'DW',
  'LB',
  'SC',
  'MP',
  'KB',
  'RT',
  'AR',
  'KC',
  'BS',
  'MH',
  'CD',
  'PN',
  'LS',
  'JK',
  'DE',
  'RW',
  'EB',
  'JF',
  'AS',
  'CH',
  'RH',
  'GD',
  'ST',
];

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <Flexbox direction="column" justifyContent="end">
          <PageTitle />
          <ul>
            <li>
              <Text as="b">Image</Text>
              <Text> - displays a user&apos;s profile picture.</Text>
            </li>
            <li>
              <Text as="b">Initials</Text>
              <Text> - displays a user&apos;s initials (when no profile picture is available).</Text>
            </li>
            <li>
              <Text as="b">Icon</Text>
              <Text> - used to represent non-human entities (e.g. a bot or service user).</Text>
            </li>
          </ul>
        </Flexbox>
        <Example title="Vinette">
          <Example.Demo justifyContent="center" gap="M">
            <Avatar size="XXXL">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="XXXL" hasVignette>
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
          </Example.Demo>
        </Example>
        <Example title="Icon">
          <Example.Demo>
            <Avatar size="XXXL">
              <Avatar.Icon src={Icon.Clipboard} />
            </Avatar>
          </Example.Demo>
        </Example>
        <Example title="Status">
          <Example.Demo>
            <Flexbox direction="column" alignItems="center" gap="XS">
              <Avatar size="XXL" hasVignette status="available">
                <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
              </Avatar>
              <Text>available</Text>
            </Flexbox>
            <Flexbox direction="column" alignItems="center" gap="XS">
              <Avatar size="XXL" hasVignette status="away">
                <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
              </Avatar>
              <Text>away</Text>
            </Flexbox>
            <Flexbox direction="column" alignItems="center" gap="XS">
              <Avatar size="XXL" hasVignette status="busy">
                <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
              </Avatar>
              <Text>busy</Text>
            </Flexbox>
            <Flexbox direction="column" alignItems="center" gap="XS">
              <Avatar size="XXL" hasVignette status="offline">
                <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
              </Avatar>
              <Text>offline</Text>
            </Flexbox>
          </Example.Demo>
        </Example>
        <Example title="Initials" caption="The background color is determined by the initials.">
          <Example.Demo style={styles.examples}>
            {exampleInitials.map((initials, i) => (
              <Flexbox key={i} justifyContent="center">
                <Avatar size="XL">
                  <Avatar.Initials initials={initials} />
                </Avatar>
              </Flexbox>
            ))}
          </Example.Demo>
        </Example>
        <Example title="Sizes">
          <Example.Demo>
            <Avatar size="XS">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="S">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="M">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="L">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="XL">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="XXL">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="XXXL">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
          </Example.Demo>
        </Example>
        <Example title="Sizes (with status)">
          <Example.Demo>
            <Avatar status="available" size="XS">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar status="available" size="S">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar status="available" size="M">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar status="available" size="L">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar status="available" size="XL">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar status="available" size="XXL">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar status="available" size="XXXL">
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
          </Example.Demo>
        </Example>
        <Example title="Sizes (with initials)">
          <Example.Demo>
            <Avatar size="XS">
              <Avatar.Initials initials="LM" />
            </Avatar>
            <Avatar size="S">
              <Avatar.Initials initials="BH" />
            </Avatar>
            <Avatar size="M">
              <Avatar.Initials initials="DW" />
            </Avatar>
            <Avatar size="L">
              <Avatar.Initials initials="AB" />
            </Avatar>
            <Avatar size="XL">
              <Avatar.Initials initials="MP" />
            </Avatar>
            <Avatar size="XXL">
              <Avatar.Initials initials="TB" />
            </Avatar>
            <Avatar size="XXXL">
              <Avatar.Initials initials="BS" />
            </Avatar>
          </Example.Demo>
        </Example>
        <Example title="Sizes (with icon)">
          <Example.Demo>
            <Avatar size="XS">
              <Avatar.Icon src={Icon.Bell} />
            </Avatar>
            <Avatar size="S">
              <Avatar.Icon src={Icon.Flask} />
            </Avatar>
            <Avatar size="M">
              <Avatar.Icon src={Icon.Broadcast} />
            </Avatar>
            <Avatar size="L">
              <Avatar.Icon src={Icon.Clipboard} />
            </Avatar>
            <Avatar size="XL">
              <Avatar.Icon src={Icon.Graph} />
            </Avatar>
            <Avatar size="XXL">
              <Avatar.Icon src={Icon.Robot} />
            </Avatar>
            <Avatar size="XXXL">
              <Avatar.Icon src={Icon.Trash} />
            </Avatar>
          </Example.Demo>
        </Example>
        <Example title="Darken on hover">
          <Example.Demo>
            <Avatar size="XXXL" hasVignette darkenOnHover>
              <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
            </Avatar>
            <Avatar size="XXXL" darkenOnHover>
              <Avatar.Initials initials="TB" />
            </Avatar>
            <Avatar size="XXXL" darkenOnHover>
              <Avatar.Icon src={Icon.Robot} />
            </Avatar>
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
  examples: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    rowGap: gap.S,
  },
});
