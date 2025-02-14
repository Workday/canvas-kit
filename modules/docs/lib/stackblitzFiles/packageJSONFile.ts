export const packageJSONFile = `{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@emotion/css": "11.11.2",
    "@emotion/react": "11.11.4",
    "@types/react": "18.2.60",
    "@types/react-dom": "18.2.19",
    "@workday/canvas-kit-labs-react": "12.0.0",
    "@workday/canvas-kit-preview-react": "12.0.0",
    "@workday/canvas-kit-react": "12.0.0",
    "@workday/canvas-kit-react-fonts": "^12.0.0",
    "@workday/canvas-kit-styling": "12.0.0",
    "@workday/canvas-system-icons-web": "3.0.22",
    "@workday/canvas-tokens-web": "2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.59",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^7.1.0",
    "@typescript-eslint/parser": "^7.1.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.1.4"
  }
}
`;
