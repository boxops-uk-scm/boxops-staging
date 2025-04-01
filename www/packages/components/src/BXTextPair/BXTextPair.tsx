import '../colors.stylex';

import * as stylex from '@stylexjs/stylex';
import { forwardRef, ReactNode } from 'react';

import { BXHeading } from '../BXHeading/BXHeading';
import { BXText , bxTextStyles } from '../BXText/BXText';


interface BXTextPairProps {
  variant?: BXTextPairVariant;
  children?: ReactNode;
  style?: stylex.StyleXStyles;
  description?: string;
}

const BXTextPair = forwardRef<HTMLDivElement, BXTextPairProps>(
  ({ children, variant = 'body', style, description }: BXTextPairProps, ref) => {
    switch (variant) {
      case 'h2':
        return (
          <div ref={ref} {...stylex.props(bxTextStyles.base, style)}>
            <div>
              <BXHeading variant="h2">{children}</BXHeading>
            </div>
            <div>
              <BXText style={bxTextPairStyles.description} variant="body">
                {description}
              </BXText>
            </div>
          </div>
        );
      case 'h3':
        return (
          <div ref={ref} {...stylex.props(bxTextStyles.base, style)}>
            <div>
              <BXHeading variant="h3">{children}</BXHeading>
            </div>
            <div>
              <BXText style={bxTextPairStyles.description} variant="body">
                {description}
              </BXText>
            </div>
          </div>
        );
      case 'h4':
        return (
          <div ref={ref} {...stylex.props(bxTextStyles.base, style)}>
            <div>
              <BXHeading variant="h4">{children}</BXHeading>
            </div>
            <div>
              <BXText style={bxTextPairStyles.description} variant="supporting">
                {description}
              </BXText>
            </div>
          </div>
        );
      case 'body':
        return (
          <div ref={ref} {...stylex.props(bxTextStyles.base, style)}>
            <div>
              <BXText variant="body">{children}</BXText>
            </div>
            <div>
              <BXText style={bxTextPairStyles.description} variant="supporting">
                {description}
              </BXText>
            </div>
          </div>
        );
    }
  },
);

BXTextPair.displayName = 'BXTextPair';

type BXTextPairVariant = 'body' | 'h2' | 'h3' | 'h4';

const bxTextPairStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
});

export { BXTextPair, bxTextPairStyles };
export type { BXTextPairProps, BXTextPairVariant };
