<script>
    let count = 0;

    $: doubled = count * 2;
    $: quadrupled = doubled * 2;
</script>

<button on:click={()=>count++}>Plus 1</button>
<p>doubled is {doubled}</p>
<p>quadrupled is {quadrupled}</p>