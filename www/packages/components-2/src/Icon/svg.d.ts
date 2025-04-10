declare module '*.svg?react' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}
