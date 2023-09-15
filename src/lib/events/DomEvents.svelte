<script>
    let m = { x: 0, y: 0 };
</script>

<div on:pointerover={(e) => (m = { x: e.clientX, y: e.clientY })}>
    <p>The mouse position is {m.x} x {m.y}</p>
</div>

<style>
    div {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 1rem;
    }
</style>
