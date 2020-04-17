<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  .blog-page {
    max-width: 920px;
    margin: auto;
  }
</style>

<svelte:head>
  <title>bradur's blog</title>
</svelte:head>

<div class="blog-page">
  <h1>Recent posts</h1>

  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
                tell Sapper to load the data for the page as soon as
                the user hovers over the link or taps it, instead of
                waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </li>
    {/each}
  </ul>
</div>
