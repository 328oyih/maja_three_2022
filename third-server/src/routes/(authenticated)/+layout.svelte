<script lang="ts">
    import type { LayoutServerData } from "./$types";
    export let data: LayoutServerData;
</script>
<body>
    <nav>
        <a href="/"class="link"> Home</a>
    
        <a href="/settings"class="link">Settings</a>
    
        <a href="/info"class="link">Info</a>
    
        <a href="/support"class="link">Support</a>
    </nav>
    
</body>


<slot />

<style>


    .link {
        color: blueviolet;
    }

    .link:visited {
        color: blueviolet;
    }

</style>