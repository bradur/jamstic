<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #eee;
    font-weight: 300;
    padding: 0 1em;
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    max-width: 1280px;
    margin: auto;
    width: 100%;
    display: inline-block;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ccc;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'games' ? 'page' : undefined}
        href="games">
        games
      </a>
    </li>
  </ul>
</nav>
