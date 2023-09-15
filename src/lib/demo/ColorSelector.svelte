<script lang="ts">
    import ColorSelector from "./ColorSelector.svelte";
    let colors = [
        "purple",
        "blue",
        "red",
        "yellow",
        "white",
        "orange",
        "pink",
        "green",
    ];
    let selectedColor = "green";
</script>

{#each colors as color}
  <button style="background-color: {color};">{color}</button>
{/each}

<style>
    button{
        border: 1px solid black;
        margin: 0 2px;
    }
</style>