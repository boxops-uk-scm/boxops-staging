import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import {
  Text,
  Flexbox,
  MetadataList,
  SideNav,
  Badge,
  Avatar,
  StatusDot,
  Link,
  DateTime,
  Card,
  Icon,
} from '@boxops/components-2';
import React from 'react';
import { padding, semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';
import { addDays, subDays } from 'date-fns';

const Page: React.FC<EmptyEntryPointProps> = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example title="Example" style={styles.wide}>
          <Example.Demo>
            <Card style={styles.card}>
              <Card.Header title="AI-34920 metadata" />
              <Flexbox gap="M">
                <MetadataList>
                  <MetadataList.Label>Project owner</MetadataList.Label>
                  <Flexbox gap="S" alignItems="center">
                    <Avatar size="XS">
                      <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
                    </Avatar>
                    <Text>
                      <Link href="https://www.google.com">Daniela Giménez</Link>
                    </Text>
                  </Flexbox>
                  <MetadataList.Label>Project status</MetadataList.Label>
                  <Flexbox gap="XS" alignItems="center">
                    <StatusDot variant="success" size="S" />
                    <Text>Active</Text>
                  </Flexbox>
                  <MetadataList.Label>Creation date</MetadataList.Label>
                  <DateTime instant={new Date()} formatString="MMM d, yyyy" />
                  <MetadataList.Label>Description</MetadataList.Label>
                  <Text style={styles.description}>
                    AI-34829 is an internal workflow that automates data ingestion...
                  </Text>
                  <MetadataList.Label>Last updated</MetadataList.Label>
                  <DateTime instant={subDays(new Date(), 5)} formatString="MMM d, yyyy" />
                  <MetadataList.Label>Project documentation</MetadataList.Label>
                  <Flexbox gap="XS" alignItems="center">
                    <Icon.FileText size="S" />
                    <Text>document.pdf</Text>
                  </Flexbox>
                </MetadataList>
                <MetadataList>
                  <MetadataList.Label>Project department</MetadataList.Label>
                  <Text>
                    <Link href="http://www.google.com">Artificial Intelligence</Link>
                  </Text>
                  <MetadataList.Label>Project priority</MetadataList.Label>
                  <Text>High</Text>
                  <MetadataList.Label>Estimated delivery date</MetadataList.Label>
                  <DateTime instant={addDays(new Date(), 30)} formatString="MMM d, yyyy" />
                  <MetadataList.Label helpMessage="Help message">Assets</MetadataList.Label>
                  <Flexbox gap="S" alignItems="center">
                    <Badge label="Label" color="gray" />
                    <Badge label="Label" color="gray" />
                    <Badge label="Label" color="gray" />
                    <Badge label="+1" color="gray" />
                  </Flexbox>
                  <MetadataList.Label>Location</MetadataList.Label>
                  <Text>Menlo Park, California</Text>
                  <MetadataList.Label>Compliance check</MetadataList.Label>
                  <Text>Passed</Text>
                  <MetadataList.Label>Team size</MetadataList.Label>
                  <Text>15</Text>
                </MetadataList>
              </Flexbox>
            </Card>
          </Example.Demo>
        </Example>
        <Example title="Help message">
          <Example.Demo>
            <MetadataList>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Text>Text value</Text>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="S" alignItems="center">
                <Badge label="Label" color="gray" />
                <Badge label="Label" color="gray" />
                <Badge label="Label" color="gray" />
              </Flexbox>
              <MetadataList.Label helpMessage="This is a help message.">Metadata label</MetadataList.Label>
              <DateTime instant={new Date()} />
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="S" alignItems="center">
                <Avatar size="XS">
                  <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
                </Avatar>
                <Text>
                  <Link href="https://www.google.com">Daniela Giménez</Link>
                </Text>
              </Flexbox>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="XS" alignItems="center">
                <StatusDot variant="success" size="S" />
                <Text>Active</Text>
              </Flexbox>
            </MetadataList>
          </Example.Demo>
        </Example>
        <Example title="Title">
          <Example.Demo>
            <MetadataList title="H4 heading text">
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Text>Text value</Text>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="S" alignItems="center">
                <Badge label="Label" color="gray" />
                <Badge label="Label" color="gray" />
                <Badge label="Label" color="gray" />
              </Flexbox>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <DateTime instant={new Date()} />
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="S" alignItems="center">
                <Avatar size="XS">
                  <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
                </Avatar>
                <Text>
                  <Link href="https://www.google.com">Daniela Giménez</Link>
                </Text>
              </Flexbox>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="XS" alignItems="center">
                <StatusDot variant="success" size="S" />
                <Text>Active</Text>
              </Flexbox>
            </MetadataList>
          </Example.Demo>
        </Example>
        <Example title="Subtitle">
          <Example.Demo>
            <MetadataList title="H4 heading text" subtitle="Description text">
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Text>Text value</Text>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="S" alignItems="center">
                <Badge label="Label" color="gray" />
                <Badge label="Label" color="gray" />
                <Badge label="Label" color="gray" />
              </Flexbox>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <DateTime instant={new Date()} />
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="S" alignItems="center">
                <Avatar size="XS">
                  <Avatar.Image src="https://boxops-static.s3.eu-north-1.amazonaws.com/public/profile1.jpeg" />
                </Avatar>
                <Text>
                  <Link href="https://www.google.com">Daniela Giménez</Link>
                </Text>
              </Flexbox>
              <MetadataList.Label>Metadata label</MetadataList.Label>
              <Flexbox gap="XS" alignItems="center">
                <StatusDot variant="success" size="S" />
                <Text>Active</Text>
              </Flexbox>
            </MetadataList>
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
  wide: {
    width: '900px',
  },
  description: {
    maxWidth: '200px',
  },
  card: {
    padding: padding.M,
  },
});
