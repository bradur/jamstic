<script context="module">
  export async function preload({ params, query }) {
    const [event, eventId, gameTitle] = params.slug;
    const jsonPath = `games/${event}/${eventId}/${gameTitle}.json`;
    const res = await this.fetch(jsonPath);
    const data = await res.json();

    if (res.status === 200) {
      return { game: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let game;
</script>

<style>
  .game-container {
    border-left: 5px solid #eee;
  }
  .game-content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .game-content :global(ul) {
    line-height: 1.5;
  }

  .game-content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .game-content :global(img) {
    max-width: 100%;
  }
  .game-content {
    background: #f9f9f9;
    padding: 5px 20px;
  }
  .game-title,
  .game-cover {
    display: inline-block;
    vertical-align: top;
    margin: auto;
  }
  .game-title {
    margin: auto;
    text-align: center;
    width: 50%;
    font-size: 50px;
  }
  .game-info {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 220px;
    background: #fff;
    border-bottom: 5px solid #eee;
  }
  .game-cover {
    display: flex;
    margin: 0;
    height: 100%;
    width: 50%;
    box-sizing: border-box;
  }
  .game-cover-img {
    background-size: 100%;
    background-position: 50%;
    width: 100%;
    height: 100%;
    box-shadow: inset 2px 2px 5px #5f5f5f;
  }
  .game-content :global(th), .game-content :global(td) {
    text-align: left;
    padding: 5px;
}


.game-content :global(table) {
    border-spacing:0;
}

.game-content :global(th) {
    font-size: 16px;
    font-weight: bold;
    color: #444;
    background: #eee;
}

.game-content :global(tr:nth-child(even)) {
  background: #f9f9f9;
}

.game-content :global(tr:nth-child(odd)) {
  background: #fff;
}
</style>

<svelte:head>
  <title>{game.name}</title>
</svelte:head>

<div class="game-container">
  <div class="game-info">
    <h1 class="game-title">{game.name}</h1>
    <div class="game-cover">
      <div class="game-cover-img" style="background-image: url('{game.cover}')"></div>
    </div>
  </div>
  <div class="game-content">
    {@html game.body}
  </div>
</div>
