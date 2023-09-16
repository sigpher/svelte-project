<script lang="ts">
	import { onMount } from "svelte";
	interface photo {
		thumbnailUrl: string;
		title: string;
		id: Number;
		albumId: Number;
		url: string;
	}
	let photos: Array<photo> = [];
	onMount(async () => {
		const url = "http://jsonplaceholder.typicode.com/albums/1/photos";
		const resp = await fetch(url);
		photos = await resp.json();
	});
</script>

<h1>Photo album</h1>

<div class="photos">
	{#each photos as photo (photo.title)}
		<figure>
			<img src={photo.thumbnailUrl} alt={photo.title} />
			<figcaption>{photo.title}</figcaption>
		</figure>
	{/each}
</div>

<style>
	.photos {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
	}
	figure,
	img {
		width: 100%;
		margin: 0;
	}
</style>
