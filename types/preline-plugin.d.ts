declare module "preline/plugin" {
  import type { PluginCreator } from "tailwindcss/types/config";
  const plugin: PluginCreator;
  export default plugin;
}
