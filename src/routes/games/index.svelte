<script context="module">
    export async function preload({ params, query }) {
        return this.fetch(`games.json`).then(r => r.json()).then(games => {
            return { games }
        });
    }
</script>

<script>
    export let games
</script>

<style>
    div {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
    .game-picture {
        width:256px;
        height:256px;
        object-fit: cover;
    }
    .games-container {
        display:grid;
        grid-template-columns: repeat(auto-fill, 256px);
        grid-gap: 10px;
    }
    .game-container {
        /*display:inline-block;
        margin:auto;
        width:auto;*/
    }
</style>

<svelte:head>
    <title>bradur's games</title>
</svelte:head>

<h1>Games</h1>

<h2>LDJam</h2>
<div class="games-container">
{#each games as game}
    <a class="game-container" href="{ game.url }">
        <h3>{game.name}</h3>
        <span>{game.eventName}</span>
        <div class="game-picture-container">
            <img class="game-picture" src="{ game.cover }" alt="Cover picture of { game.name }">
        </div>
    </a>
{/each}
</div>
