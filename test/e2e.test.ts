import { waitFor, within } from "@testing-library/dom";
import * as path from "path";
import { describe, expect, test } from "vitest";

import { getExampleDOM } from "./dom.js";

describe("examples", () => {
  test.each([["vue"], ["react"], ["preact"], ["solid"], ["svelte"]])(
    "%s",
    async (example) => {
      const root = path.resolve(__dirname, "../examples", example);
      const dom = await getExampleDOM(root);

      global.window = dom.window as any;
      global.document = dom.window.document;

      const { default: userEvent } = await import(
        "@testing-library/user-event"
      );
      const user = userEvent.setup({ document });

      const screen = within(dom.window.document.body);
      const styles = document.querySelector('link[rel="stylesheet"]');
      expect(styles).toBeTruthy();

      const [counter1, counter2] = await screen.findAllByTestId("counter");
      const value1 = counter1.querySelector("span");
      const value2 = counter2.querySelector("span");
      const inc1 = await within(counter1).findByText("+");
      const inc2 = await within(counter2).findByText("+");

      expect(value1).toHaveTextContent("0");
      expect(value2).toHaveTextContent("100");

      await waitFor(async () => {
        await user.click(inc1);
        expect(value1?.textContent).not.toBe("0");
      });

      await user.click(inc2);
      await waitFor(async () => {
        expect(value2?.textContent).toBe("101");
      });
    }
  );
});
