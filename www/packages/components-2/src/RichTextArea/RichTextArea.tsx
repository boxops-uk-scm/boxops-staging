import '../tokens.stylex.ts';

import * as stylex from '@stylexjs/stylex';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { backgroundColor, dividerColor, gap, padding, semanticColor } from '../tokens.stylex';
import { createDOMRange, createRectsFromDOMRange } from '@lexical/selection';
import Text from '../Text';
import {
  $getSelection,
  $isRangeSelection,
  EditorState,
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  TextFormatType,
  TextNode,
} from 'lexical';
import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import Card from '../Card';
import ButtonGroup from '../ButtonGroup';
import Icon from '../Icon';
import ToggleButton from '../ToggleButton';

export interface Props {
  style?: stylex.StyleXStyles;
}

function onError(error: Error) {
  console.error(error);
}

function onChange(
  editor: LexicalEditor,
  setRects: (rects: DOMRect | undefined) => void,
  setIsSelectionBold: (isBold: boolean) => void,
  setIsSelectionItalic: (isItalic: boolean) => void,
  setIsSelectionUnderline: (isUnderline: boolean) => void,
  setIsSelectionStrikethrough: (isStrikethrough: boolean) => void,
  setIsSelectionCode: (isCode: boolean) => void,
  setIsActionBarOpen: (isOpen: boolean) => void,
) {
  editor.read(() => {
    const selection = $getSelection();

    if (!selection || !$isRangeSelection(selection) || selection.isCollapsed()) {
      setIsSelectionBold(false);
      setIsSelectionItalic(false);
      setIsSelectionUnderline(false);
      setIsSelectionStrikethrough(false);
      setIsSelectionCode(false);
      setIsActionBarOpen(false);
      return;
    }

    let isSelectionBold = true;
    let isSelectionItalic = true;
    let isSelectionUnderline = true;
    let isSelectionStrikethrough = true;
    let isSelectionCode = true;

    const nodes = selection.getNodes();
    for (const node of nodes) {
      if (node instanceof TextNode) {
        if (isSelectionBold && !node.hasFormat('bold')) {
          isSelectionBold = false;
        }

        if (isSelectionItalic && !node.hasFormat('italic')) {
          isSelectionItalic = false;
        }

        if (isSelectionUnderline && !node.hasFormat('underline')) {
          isSelectionUnderline = false;
        }

        if (isSelectionStrikethrough && !node.hasFormat('strikethrough')) {
          isSelectionStrikethrough = false;
        }

        if (isSelectionCode && !node.hasFormat('code')) {
          isSelectionCode = false;
        }

        if (
          !isSelectionBold &&
          !isSelectionItalic &&
          !isSelectionUnderline &&
          !isSelectionStrikethrough &&
          !isSelectionCode
        ) {
          break;
        }
      }
    }

    setIsSelectionBold(isSelectionBold);
    setIsSelectionItalic(isSelectionItalic);
    setIsSelectionUnderline(isSelectionUnderline);
    setIsSelectionStrikethrough(isSelectionStrikethrough);
    setIsSelectionCode(isSelectionCode);
  });

  editor.read(() => {
    const selection = $getSelection();

    if (!selection || !$isRangeSelection(selection) || selection.isCollapsed()) {
      return undefined;
    }

    const anchor = selection.anchor;
    const focus = selection.focus;
    const selectionRange = createDOMRange(
      editor,
      anchor.getNode(),
      selection.anchor.offset,
      focus.getNode(),
      selection.focus.offset,
    );

    if (!selectionRange) {
      return undefined;
    }

    const boundingBox = getBoundingBox(createRectsFromDOMRange(editor, selectionRange));

    if (boundingBox) {
      setIsActionBarOpen(true);
    }

    setRects(boundingBox);
  });
}

function getBoundingBox(rects: ClientRect[]): DOMRect | undefined {
  if (!rects.length) return undefined;

  let minX = rects[0].x;
  let minY = rects[0].y;
  let maxRight = rects[0].right;
  let maxBottom = rects[0].bottom;

  for (let i = 1; i < rects.length; i++) {
    const r = rects[i];

    if (r.x < minX) minX = r.x;
    if (r.y < minY) minY = r.y;
    if (r.right > maxRight) maxRight = r.right;
    if (r.bottom > maxBottom) maxBottom = r.bottom;
  }

  return new DOMRect(minX, minY, maxRight - minX, maxBottom - minY);
}

const RichTextArea = ({ style, ...props }: Props) => {
  const [isActionBarOpen, setIsActionBarOpen] = React.useState(false);
  const [rect, setRect] = React.useState<DOMRect | undefined>(undefined);

  const [isSelectionBold, setIsSelectionBold] = React.useState(false);
  const [isSelectionItalic, setIsSelectionItalic] = React.useState(false);
  const [isSelectionUnderline, setIsSelectionUnderline] = React.useState(false);
  const [isSelectionStrikethrough, setIsSelectionStrikethrough] = React.useState(false);
  const [isSelectionCode, setIsSelectionCode] = React.useState(false);

  const initialConfig = {
    namespace: 'RichTextArea',
    theme,
    onError,
  };

  const updateRect = React.useCallback((_state: EditorState, editor: LexicalEditor) => {
    onChange(
      editor,
      setRect,
      setIsSelectionBold,
      setIsSelectionItalic,
      setIsSelectionUnderline,
      setIsSelectionStrikethrough,
      setIsSelectionCode,
      setIsActionBarOpen,
    );
  }, []);

  return (
    <HoverCard.Root open={isActionBarOpen}>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable {...stylex.props(styles.base, style)} {...props} />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={updateRect} />
        {rect && (
          <HoverCard.Trigger asChild>
            <div {...stylex.props(styles.selection(rect.x, rect.y, rect.width, rect.height))} />
          </HoverCard.Trigger>
        )}
        <ActionBar
          isSelectionBold={isSelectionBold}
          isSelectionItalic={isSelectionItalic}
          isSelectionStrikethrough={isSelectionStrikethrough}
          isSelectionUnderline={isSelectionUnderline}
          isSelectionCode={isSelectionCode}
          dismiss={() => setIsActionBarOpen(false)}
        />
      </LexicalComposer>
    </HoverCard.Root>
  );
};

const ActionBar = ({
  isSelectionBold,
  isSelectionItalic,
  isSelectionStrikethrough,
  isSelectionUnderline,
  isSelectionCode,
  dismiss,
}: {
  isSelectionBold: boolean;
  isSelectionItalic: boolean;
  isSelectionStrikethrough: boolean;
  isSelectionUnderline: boolean;
  isSelectionCode: boolean;
  dismiss: () => void;
}) => {
  const [editor] = useLexicalComposerContext();

  const dispatchFormatTextCommand = React.useCallback(
    (format: TextFormatType) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
        }
      });
    },
    [editor],
  );

  const makeBold = React.useCallback(() => dispatchFormatTextCommand('bold'), [dispatchFormatTextCommand]);

  const makeItalic = React.useCallback(() => dispatchFormatTextCommand('italic'), [dispatchFormatTextCommand]);

  const makeUnderline = React.useCallback(() => dispatchFormatTextCommand('underline'), [dispatchFormatTextCommand]);

  const makeStrikethrough = React.useCallback(
    () => dispatchFormatTextCommand('strikethrough'),
    [dispatchFormatTextCommand],
  );

  const makeCode = React.useCallback(() => dispatchFormatTextCommand('code'), [dispatchFormatTextCommand]);

  return (
    <HoverCard.Content side="top" align="start" sideOffset={8} onPointerDownOutside={dismiss}>
      <Card style={styles.actionBar}>
        <ButtonGroup style={styles.actionButtonGroup}>
          <ToggleButton
            isSelected={isSelectionBold}
            onClick={makeBold}
            style={styles.action}
            variant="flat"
            label={<Text as="b">B</Text>}
          />
          <ToggleButton
            isSelected={isSelectionItalic}
            onClick={makeItalic}
            style={styles.action}
            variant="flat"
            label={<Text as="i">I</Text>}
          />
          <ToggleButton
            isSelected={isSelectionUnderline}
            onClick={makeUnderline}
            style={styles.action}
            variant="flat"
            label={<Text as="u">U</Text>}
          />
          <ToggleButton
            isSelected={isSelectionStrikethrough}
            onClick={makeStrikethrough}
            style={styles.action}
            variant="flat"
            label={<Text as="s">S</Text>}
          />
          <ToggleButton
            isSelected={isSelectionCode}
            onClick={makeCode}
            style={styles.action}
            variant="flat"
            startContent={<Icon.Code />}
          />
          <ToggleButton style={styles.action} variant="flat" startContent={<Icon.LinkSimple />} />
        </ButtonGroup>
      </Card>
    </HoverCard.Content>
  );
};

export default RichTextArea;

export const styles = stylex.create({
  base: {
    padding: padding.S,
    backgroundColor: backgroundColor.surface,
    borderRadius: '4px',
    border: '1px solid',
    borderColor: dividerColor.subtle,
    ':focus': {
      boxShadow: `inset 0 0 0 3px ${semanticColor.accentSubtle}`,
      borderColor: semanticColor.accent,
      outline: 'none',
    },
  },
  selection: (x: number, y: number, width: number, height: number) => ({
    position: 'absolute',
    left: x,
    top: y,
    width,
    height,
    pointerEvents: 'none',
  }),
  actionBar: {
    borderRadius: '4px',
    padding: 0,
  },
  actionButtonGroup: {
    gap: 0,
  },
  action: {
    minWidth: '32px',
  },
  code: {
    padding: padding.XS,
    borderRadius: '4px',
    backgroundColor: backgroundColor.secondary,
  },
  paragraph: {
    marginTop: 0,
    marginBottom: gap.S,
  },
});

const theme = {
  paragraph: 'asd' + ' ' + stylex.props([Text.styles.base, Text.styles.body, styles.paragraph]).className,
  text: {
    bold: stylex.props(Text.styles.bold).className,
    italic: stylex.props(Text.styles.italic).className,
    underline: stylex.props(Text.styles.underline).className,
    strikethrough: stylex.props(Text.styles.strikethrough).className,
    code: stylex.props(Text.styles.code, styles.code).className,
  },
};
