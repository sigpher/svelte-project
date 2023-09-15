<script lang="ts">
    let colors = [
        "purple",
        "blue",
        "red",
        "yellow",
        "white",
        "black",
        "orange",
        "pink",
    ];

    let selectedColors:[] = [];
</script>

{#each colors as color (color)}
    <input
        type="checkbox"
        value={color}
        bind:group={selectedColors}
    />{color}<br />
{/each}

{#each selectedColors as selectedColor}
    <p>{selectedColor}</p>
{/each}
