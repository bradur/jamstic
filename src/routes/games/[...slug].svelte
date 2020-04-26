<script context="module">
  export async function preload({ params, query }) {
    const [event, eventId, gameTitle] = params.slug
    const jsonPath = `games/${event}/${eventId}/${gameTitle}.json`
    const res = await this.fetch(jsonPath)
    const data = await res.json()

    if (res.status === 200) {
      return { game: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  export let game;
</script>

<style>
  .page-container {
    background: var(--one);
  }
  .game-container {
    position: relative;
    max-width: 920px;
    margin: 0 auto;
  }
  @media (max-width: 1350px) {
    .game-container {
      margin-left: 240px;
    }
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
  .game-title {
    margin: auto;
    text-align: left;
    font-size: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 200px;
    border-bottom: 5px solid #eee;
    background: linear-gradient(0deg, var(--five) 0%, var(--one) 100%);
    text-shadow: 2px 2px 0px black;
    color: #fff;
  }
  .game-cover-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    box-shadow: inset 0px 5px 3px 1px var(--one);
    border-bottom: 5px solid #eee;
  }
  .game-content :global(th),
  .game-content :global(td) {
    text-align: left;
    padding: 5px;
  }

  .game-content :global(table) {
    border-spacing: 0;
    border: 1px solid #ccc;
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

  .game-meta-container {
    position: absolute;
    right: 100%;
    height: 100%;
    width: 200px;
    top: 0;
    margin-right: 5px;
  }

  .game-meta {
    position: sticky;
    top: 0;
    padding: 10px;
    background: #f9f9f9;
  }

  .game-link a {
    width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .nav-back {
    font-size: 20px;
    display: inline-block;
    padding: 5px;
    background: #fff;
    border: 5px solid #eee;
    margin: 10px 0;
    line-height: 16px;
    height: 20px;
  }
  .game-result {
    position: relative;
    border-bottom: 1px dotted #ccc;
    background: #fff;
    padding: 2px 5px;
  }
  .game-result-value {
    position: absolute;
    right: 5px;
    z-index: 5;
    top: 0;
    height: 100%;
  }
  .game-comments {
    border-top: 5px solid #eee;
    padding: 20px;
    background: #f9f9f9;
  }
  .game-comment-body {
    padding: 10px;
    background: #fff;
    border: 1px solid #eee;
  }
  .game-comment-body :global(p) {
    margin: 0 0 5px 0;
  }
  .game-meta-section {
    margin-bottom: 20px;
  }
  .game-comment-body :global(img) {
    max-width: 100%;
  }

  .game-container :global(.jamstic-image) {
    background: #fff;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 5px;
  }

  .game-container :global(.jamstic-image-title) {
    padding: 0 5px;
  }
  .page-nav {
    max-width:920px;
    margin:0 auto;
  }
</style>

<svelte:head>
  <title>{game.name} - bradur's games</title>
</svelte:head>
<div
  class="page-container"
  style="{game.coverColors.css}"
>

  <div class="page-nav">
    <a class="nav-back" href="games">&lt;- back</a>
  </div>

  <div class="game-container">
    <h1 class="game-title">{game.name}</h1>
    <div class="game-content">
      {@html game.html}
    </div>
    <div class="game-meta-container">
      <div
        class="game-cover-img"
        style="background-image: url('{game.cover}')" />
      <div class="game-meta">
        <div class="game-meta-section">
          <h2>Info</h2>
          <div class="game-event">
            {game.eventName}
            <span class="game-event-type">({game.subsubtype})</span>
          </div>
          <div class="game-publish-date" title={game.timestamp}>{game.ago}</div>
        </div>
        <div class="game-meta-section">
          <h2>Results</h2>
          {#each game.results.all as result}
            <div class="game-result">
              <div class="game-result-title">{result.title}</div>
              <div class="game-result-value">{result.result}</div>
            </div>
          {/each}
        </div>
        <div class="game-meta-section">
          <h2>Links</h2>
          {#each game.links as link}
            <div class="game-link">
              <a title={link.url} href={link.url}>{link.title}</a>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="game-comments">
      <h2>Comments</h2>
      <div class="game-comments-container">
        {#each game.comments as comment}
          <div class="game-comment">
            <div class="game-comment-author">{comment.author}</div>
            <div class="game-comment-created" title={comment.timestamp}>
              {comment.ago}
            </div>
            <div class="game-comment-body">
              {@html comment.html}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
