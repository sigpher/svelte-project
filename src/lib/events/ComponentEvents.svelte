<script lang="ts">
    import DomEvents from "./DomEvents.svelte";
    import Inner from "./inner.svelte";
    import Outer from "./outer.svelte";
    function handleMessage(event: CustomEvent) {
        alert(event.detail.text);
    }
</script>

<Inner on:message={handleMessage} />
<Outer on:message={handleMessage} />
