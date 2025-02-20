declare module '!!raw-loader!*' {
  const content: string;
  export default content;
}

declare module 'vite' {
  export function defineConfig(config: any): any;
}

declare module '@vitejs/plugin-react' {
  const react: any;
  export default react;
}
