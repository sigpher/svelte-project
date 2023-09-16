import { onDestroy } from "svelte";
export function onInterval(callback: TimerHandler, milliseconds: number) {
    const interval = setInterval(callback, milliseconds);
    onDestroy(() => {
        clearInterval(interval)
    })
}
