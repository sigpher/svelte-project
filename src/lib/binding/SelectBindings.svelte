<script>
    let questions = [
        {
            id: 1,
            text: `Where did you go to school?`,
        },
        {
            id: 2,
            text: `What is your mother's name?`,
        },
        {
            id: 3,
            text: `What is another personal fact that an attacker could easily find with Google?`,
        },
    ];
    let selected = false;
    let answer = "";
    const handleSubmit = () =>
        alert(
            `answer question ${selected.id} (${selected.text}) with "${answer}"`
        );
</script>

<h2>Insecurity question</h2>
<form on:submit|preventDefault={handleSubmit}>
    <select value={selected} on:change={() => (answer = "")}>
        {#each questions as question}
            <option value={question}> {question.text}</option>
        {/each}</select
    >
    <br />
    <input bind:value={answer} />
    <button disabled={!answer} type="submit"> Submit</button>
</form>
<p>
    selected question {selected ? selected.id : "[waiting...]"}
</p>
