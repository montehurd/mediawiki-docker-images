import originalConfig from "./vite.config.ts";
import { mergeConfig, defineConfig } from "vite";
export default defineConfig((env) => {
  const original = typeof originalConfig === "function" ? originalConfig(env) : originalConfig;
  return mergeConfig(original, {
    server: {
      hmr: {
        overlay: false
      }
    }
  });
});