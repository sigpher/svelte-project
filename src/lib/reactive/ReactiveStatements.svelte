<script>
    let count = 0;
    $: if (count >= 10) {
        alert(`count is dangerously higt`);
        count = 0;
    }
</script>

<button
    on:click={() => {
        count++;
    }}>Clicked {count} {count === 1 ? `time` : `times`}</button
>
