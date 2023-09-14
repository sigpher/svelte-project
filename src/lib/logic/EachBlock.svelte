<script>
    let cats = [
        { id: 1, name: "Keyborad Cat" },
        { id: 2, name: "Maru" },
        { id: 3, name: "Henri The Existential Cat" },
    ];
</script>

<h1>The Famous Cats of Baidu</h1>
<ul>
    {#each cats as { id, name }, i}
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.baidu.com/s?wd={name}">{id}:{name}</a
            >
        </li>
    {/each}
</ul>
