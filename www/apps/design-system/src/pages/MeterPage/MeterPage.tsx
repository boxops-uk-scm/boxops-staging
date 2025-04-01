import '@boxops/components-2/src/tokens.stylex.ts';

import { EmptyEntryPointProps } from '@boxops/router';
import * as stylex from '@stylexjs/stylex';
import { Button, ButtonGroup, Flexbox, Meter, SideNav } from '@boxops/components-2';
import React, { MutableRefObject } from 'react';
import { semanticColor } from '@boxops/components-2/src/tokens.stylex';
import Example from '../../components/Example';
import PageTitle from '../../components/PageTitle';
import prettyBytes from 'pretty-bytes';

function getLabel(status: Meter.Status, value: number): React.ReactNode {
  if (status === 'indeterminate') {
    return 'Waiting to start...';
  }

  const totalBytes = 1.2 * 1000 * 1000 * 1000;
  const currentBytes = Math.round(totalBytes * value);

  return `${prettyBytes(currentBytes)} of ${prettyBytes(totalBytes)}`;
}

const Page: React.FC<EmptyEntryPointProps> = () => {
  const [status, setStatus] = React.useState<Meter.Status>('indeterminate');
  const [value, setValue] = React.useState(0);
  const intervalRef: MutableRefObject<NodeJS.Timeout | undefined> = React.useRef(undefined);

  const startProgress = () => {
    if (intervalRef.current) return;

    setStatus('in-progress');
    intervalRef.current = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = undefined;
          setStatus('complete');
          return 1;
        }

        if (Math.random() < 0.3) {
          return prevValue;
        }

        return prevValue + Math.random() * 0.01;
      });
    }, 40);
  };

  const pauseProgress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
      setStatus('paused');
    }
  };

  const resetProgress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
    setValue(0);
    setStatus('indeterminate');
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div {...stylex.props(styles.root)}>
      <SideNav />
      <div />
      <Flexbox direction="column" gap="L">
        <PageTitle />
        <Example title="Demo">
          <Example.Demo gap="M">
            <Meter status={status} value={value} label={getLabel(status, value)} style={styles.meter} />
            <ButtonGroup>
              <Button
                onClick={startProgress}
                label={status === 'indeterminate' || status === 'complete' ? 'Start' : 'Resume'}
                disabled={status === 'in-progress' || status === 'complete'}
              />
              <Button onClick={pauseProgress} label="Pause" disabled={status !== 'in-progress'} />
              <Button onClick={resetProgress} label="Reset" disabled={status === 'indeterminate'} />
            </ButtonGroup>
          </Example.Demo>
        </Example>
        <Example title="Indeterminate">
          <Example.Demo>
            <Meter status="indeterminate" value={0} />
          </Example.Demo>
        </Example>
        <Example title="In-progress">
          <Example.Demo direction="column" gap="M">
            <Meter status="in-progress" value={0.46} />
          </Example.Demo>
        </Example>
        <Example title="Error">
          <Example.Demo direction="column" gap="M">
            <Meter status="error" value={0.46} />
          </Example.Demo>
        </Example>
        <Example title="Complete">
          <Example.Demo direction="column" gap="M">
            <Meter status="complete" value={1.0} />
          </Example.Demo>
        </Example>
        <Example title="Paused">
          <Example.Demo direction="column" gap="M">
            <Meter status="paused" value={0.46} />
          </Example.Demo>
        </Example>
        <Example title="Indeterminate (label)">
          <Example.Demo>
            <Meter status="indeterminate" value={0} label="Waiting to start..." />
          </Example.Demo>
        </Example>
        <Example title="In-progress (label)">
          <Example.Demo direction="column" gap="M">
            <Meter status="in-progress" value={0.46} label="545MB of 1.2GB" />
          </Example.Demo>
        </Example>
        <Example title="Error (label)">
          <Example.Demo direction="column" gap="M">
            <Meter status="error" value={0.46} label="545MB of 1.2GB" />
          </Example.Demo>
        </Example>
        <Example title="Complete (label)">
          <Example.Demo direction="column" gap="M">
            <Meter status="complete" value={1.0} label="1.2GB of 1.2GB" />
          </Example.Demo>
        </Example>
        <Example title="Paused (label)">
          <Example.Demo direction="column" gap="M">
            <Meter status="paused" value={0.46} label="545MB of 1.2GB" />
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
  vertical: {
    flexDirection: 'column',
  },
  meter: {
    maxWidth: '400px',
  },
});
