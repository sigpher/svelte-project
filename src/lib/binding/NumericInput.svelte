<script>
    let a = 1;
    let b = 2;
    let min = 0;
    let max = 10;

    $: sum = a + b;
</script>

<label>
    <input type="number" bind:value={a} {min} {max} />
    <input type="range" bind:value={a} {min} {max} />
</label>
<br />
<label>
    <input type="number" bind:value={b} {min} {max} />
    <input type="range" bind:value={b} {min} {max} />
</label>
<br />
<label>
    <input type="number" bind:value={sum} {min} max={max + max} />
    <input type="range" bind:value={sum} {min} max={max + max} />
</label>

<p>{a} + {b} = {sum}</p>
