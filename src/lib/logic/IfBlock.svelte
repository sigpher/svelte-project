<script>
    let user = { loggedIn: false };
</script>

{#if user.loggedIn}
    <button on:click={() => (user.loggedIn = !user.loggedIn)}>Log Out</button>
    {:else}
    <button on:click={() => (user.loggedIn = !user.loggedIn)}>Log In</button>
{/if}
