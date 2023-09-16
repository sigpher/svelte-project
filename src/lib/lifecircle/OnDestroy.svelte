<script lang="ts">
    import { onInterval } from "./utils.ts";
    let seconds = 0;
    onInterval(() => (seconds += 1), 1000);
</script>

<p>
    The page has been for {seconds}
    {seconds === 1 ? "second" : "seconds"}
</p>
