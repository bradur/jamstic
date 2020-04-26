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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .games-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-auto-rows: 256px;
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
    border-left: 2px solid var(--two);
    border-bottom: 2px solid var(--three);
    border-right: 2px solid var(--four);
    border-top: 2px solid var(--five);
    border-radius:5px;
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
    background: var(--one);
    border: 1px solid var(--two);
  }

  .game-picture-container {
    margin: 0;
    font-size: 0;
    height: 100%;
  }
  .game-meta h3 {
    margin: auto;
  }
  .game-palette {
    position: absolute;
    top: 0;
    background: #fff;
    padding:2px;
    font-size:0;
    display:none;
  }
  .game-palette div {
    display:inline-block;
    width:20px;
    height:20px;
    vertical-align: top;
    margin:0;
    border:0;
    padding:0;
  }
  .game-palette-one {background:var(--one)}
  .game-palette-two {background:var(--two)}
  .game-palette-three {background:var(--three)}
  .game-palette-four {background:var(--four)}
  .game-palette-five {background:var(--five)}
</style>

<svelte:head>
  <title>bradur's games</title>
</svelte:head>

<div class="games-page">
  <h1>Games</h1>

  <h2>LDJam</h2>
  <div class="games-container">
    {#each games as game}
      <a class="game-container" href="{game.url}" style="{game.coverColors.css}">
        <div class="game-meta">
          <h3>{game.name}</h3>
          <div class="game-meta-event">
            <div class="game-event-name">{game.eventName}</div>
            {#if game.results.overall.result !== null }
              <div class="game-event-result">#{game.results.overall.result}</div>
            {/if}
          </div>
        </div>
        <div class="game-picture-container">
          <img
            class="game-picture"
            src={game.cover}
            alt="Cover picture of {game.name}" />
        </div>
        <div class="game-palette">
          <div class="game-palette-one"></div>
          <div class="game-palette-two"></div>
          <div class="game-palette-three"></div>
          <div class="game-palette-four"></div>
          <div class="game-palette-five"></div>
        </div>
      </a>
    {/each}
  </div>
</div>
