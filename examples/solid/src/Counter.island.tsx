import { createSignal } from "solid-js";
import { island } from "virtual:island";

type Props = {
  start?: number;
};

export function Counter({ start = 0 }: Props) {
  const [counter, setCounter] = createSignal(start);
  return (
    <div class="counter" data-testid="counter">
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
      <span>{counter()}</span>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
    </div>
  );
}

export const CounterIsland = island(Counter);
