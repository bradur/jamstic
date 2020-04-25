<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<style>
    main {
        position: relative;
        background-color: white;
        margin: 0 auto;
        box-sizing: border-box;
    }
    :global(.page-container) {
        margin: 0;
        padding:0;
    }
</style>

<Nav {segment}/>

<main>
    <slot></slot>
</main>