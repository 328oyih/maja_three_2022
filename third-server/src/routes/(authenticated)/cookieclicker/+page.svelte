<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";
    export let data:PageServerData

    let count = Number(data.count);  
    let cookiesonclick = Number(data.cookiesonclick);
    let passive =  Number(data.passive);


    function onclick() {
        count = count + cookiesonclick
        console.log("asdasdasd  ")
    }
    function increasepassive(amount:number) {
        if (count >= amount) {
            count -= amount
            passive += amount
        }
    }
    
    let interval = setInterval(()=>{
        count = count + passive;
        if (passive >= 10) {
        console.log("im running")
        changeInterval(100)
    }
    },(1000))

    function changeInterval(newInterval:number) {
        clearInterval(interval);
        interval = setInterval(()=>{
            count = count + Math.round(passive/(1000/newInterval));
            if (passive >= 10) {
        changeInterval(100)
    }
            if (passive < 10) {
        console.log("im running")
        changeInterval(1000)
    }
        },(newInterval))
    }
    
    function increasething(amount:number) {
        if (count >= amount) {
            count -= amount
            cookiesonclick += amount
        }
    }




    
    function reset() {
        count = 0
        passive = 0
        cookiesonclick = 1
    }
</script>

<form action="?/save" use:enhance>
    <input type="hidden" name="count" value="{count}">
    <input type="hidden" name="cookiesonclick" value="{cookiesonclick}">
    <input type="hidden" name="passive" value="{passive}">
    <button type="submit">Save Progress</button>
</form>

<div id="value">
    <p id="text1">COOKIES: {count}</p>
    <p id="text1">CPS: {cookiesonclick  }</p>
    <p id="text1">PASSIVE: {passive}</p>

</div>

<div class="column">
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={onclick}>
        click me
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"  on:click={()=>{increasething(1)}}>
        +1cps
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"  on:click={()=>{increasething(5)}}>
        +5cps
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasething(10)}}>
        +10cps
        Cost:
    </button> 
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasething(20)}}>
        +20cps
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasething(50)}}>
        +50cps
        Cost:
    </button>

    <br>
    <p id="notblacktext">Increase Passive</p>
    <br>

    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(1)}}>
        +1
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(5)}}>
        +5
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(10)}}>
        +10
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(20)}}>
        +20
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(50)}}>
        +50
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(200)}}>
        +200
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(500)}}>
        +500
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(1000)}}>
        +1000
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(3000)}}>
        +3000
        Cost:
    </button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{increasepassive(10000)}}>
        +10000
        Cost: 3434
    </button>
</div>

<button on:click={reset}>
    Reset
</button>

{#if count >= 1000000}
    <p id="text1">you won</p>
        {:else}
            {#if count < 10000000}
                <p></p>
    {/if}
{/if}

<div id="grid1">
    <div id="item1"></div>
    <div id="item2"></div>
    <div id="item3"></div>
</div>


<style>

    :global(body) {
        background-image: url("$lib/thing2.jpg"); 
        background-size: cover;
        
    }
    #grid1 {
        display: grid;
        height: 200px;
        grid-template-columns: 200px;
        grid-template-rows: 1, 3fr;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .column {
        display: grid;
        width: 50px;
        margin-left: 25px;
        gap: 20px;
    }

    #item1 {
        background-color: black;
    }
    #item2 {
        background-color: rgb(255, 0, 0);
    }
    #item3 {
        background-color: hsl(59, 100%, 50%);
    }
    #text1 {
        color: whitesmoke;
        font-family: 'Times New Roman', Times, serif;
        font-size: 40px;
    }
    #value {
        margin-left: 25px;
    }
    #notblacktext {
        color: brown;
    }
</style>