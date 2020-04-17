<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`games.json`)
      .then(r => r.json())
      .then(games => {
        return { games };
      });
  }
</script>

<script>
  export let games;
</script>

<style>
  .game-picture {
    width: 256px;
    height: 256px;
    object-fit: cover;
  }
  .games-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 10px;
  }
  .games-page {
    max-width: 1280px;
    margin: auto;
  }
  @media (max-width: 1300px) {
    .games-page {
      max-width: 100%;
    }
  }
  .game-event-name,
  .game-event-result {
    display: inline-block;
    margin: auto;
    vertical-align: top;
  }
  .game-container {
    position: relative;
  }

  .game-meta {
    position: absolute;
    bottom: 10px;
    padding: 0 10px;
    left: 5px;
    box-sizing: border-box;
    right: 5px;
    margin: 0;
    color: #fff;
    text-shadow: 1px 1px 1px black;
    background: rgba(0, 0, 0, 0.34);
    border: 1px solid rgba(204, 204, 204, 0.51);
  }

  .game-picture-container {
    margin: 0;
  }
  .game-meta h3 {
    margin: auto;
}
</style>

<svelte:head>
  <title>bradur's games</title>
</svelte:head>

<div class="games-page">
  <h1>Games</h1>

  <h2>LDJam</h2>
  <div class="games-container">
    {#each games as game}
      <a class="game-container" href={game.url}>
        <div class="game-meta">
          <h3>{game.name}</h3>
          <div class="game-meta-event">
            <div class="game-event-name">{game.eventName}</div>
            {#if game.results[0].result !== '-'}
              <div class="game-event-result">#{game.results[0].result}</div>
            {/if}
          </div>
        </div>
        <div class="game-picture-container">
          <img
            class="game-picture"
            src={game.cover}
            alt="Cover picture of {game.name}" />
        </div>
      </a>
    {/each}
  </div>
</div>
