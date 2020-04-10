<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<style>
    main {
        position: relative;
        max-width: 80%;
        background-color: white;
        margin: 0 auto;
        padding: 20px 0;
        box-sizing: border-box;
    }

    @media (min-width: 1800px) {
        main {
            max-width: 1280px;
        }
    }
</style>

<Nav {segment}/>

<main>
    <slot></slot>
</main>