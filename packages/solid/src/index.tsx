import { createIslandComponent, IslandOptions } from "capri";
import { sharedConfig } from "solid-js";
import { NoHydration } from "solid-js/web";

import plugin from "./vite-plugin.js";

export default plugin;

export function Hydration(props: any) {
  const c: any = sharedConfig.context;
  c.noHydrate = false;
  const children = props.children;
  c.noHydrate = true;
  return children;
}

export type { RenderFunction } from "capri";

export function island<T extends (props: any) => any>(
  Component: T,
  options: IslandOptions = {}
) {
  return createIslandComponent(
    Component,
    options,
    ({ props, children, scriptProps, scriptContent }) => {
      const wrappedChildren = children && <NoHydration>{children}</NoHydration>;
      return (
        <div data-island-root style="display: contents">
          <Hydration>
            <Component {...props}>{wrappedChildren}</Component>
          </Hydration>
          <script {...scriptProps} innerHTML={scriptContent} />
        </div>
      );
    }
  );
}
