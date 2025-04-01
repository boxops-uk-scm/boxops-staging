import * as stylex from '@stylexjs/stylex';
import { nonsemanticBackgroundColor } from '../tokens.stylex';
import { vars } from './vars.stylex';

export const variants = stylex.create({
  gray: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.gray,
  },
  blue: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.blue,
  },
  green: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.green,
  },
  yellow: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.yellow,
  },
  red: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.red,
  },
  pink: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.pink,
  },
  purple: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.purple,
  },
  teal: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.teal,
  },
  cyan: {
    [vars.backgroundColor]: nonsemanticBackgroundColor.cyan,
  },
});

export type Variant = keyof typeof variants;

export function getHash(s?: string): number {
  if (!s) return 0;
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = s.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function getVariant(hash: number): Variant {
  const index = Math.abs(hash) % Object.keys(variants).length;
  return Object.keys(variants)[index] as Variant;
}
