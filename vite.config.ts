import styleTransformer from "./modules/styling-transform/lib/styleTransform";
import { vitePluginTypescriptWithTransformers } from "./modules/styling-transform/lib/vitePlugin";
import stylingConfig from "./styling.config";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@workday\/canvas-kit-styling$/,
        replacement: "@workday/canvas-kit-styling/index.ts",
      },
      {
        find: /^@workday\/canvas-kit-popup-stack$/,
        replacement: "@workday/canvas-kit-popup-stack/index.ts",
      },
      {
        find: /^@workday\/canvas-kit-docs$/,
        replacement: "@workday/canvas-kit-docs/index.ts",
      },
    ],
  },
  // plugins: [
  //   vitePluginTypescriptWithTransformers({
  //     include: /modules\/.+\.tsx?/,
  //     exclude: /examples|stories|spec|codemod|docs/,
  //     transformers: [
  //       (program) =>
  //         styleTransformer(program, { ...stylingConfig, extractCSS: false }),
  //     ],
  //   }),
  // ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
});
