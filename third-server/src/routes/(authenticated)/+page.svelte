<script lang="ts">
    import type { LayoutServerData } from "./$types";
    export let data: LayoutServerData;
</script>


<h1>LOGGED IN</h1>

<!-- <p>{_id}</p> -->

<p>{data?.userid}</p>

<button>
    <a href="/cookieclicker">Cookie Clicker</a>
</button>