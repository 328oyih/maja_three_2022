<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    export let data: PageData;

    $: count = Number(data.count);
    $: cookiesonclick = Number(data.cookiesonclick);
    $: passive = Number(data.passive);
    $: totalclicks = Number(data.totalclicks);

    function onclick() {
        count = count + cookiesonclick;
    }
    function increasepassive(amount: number) {
        if (count >= amount) {
            count -= amount;
            passive += amount;
        }
    }
    function increasetotalclicks(amount: number) {
        totalclicks += amount;
    }

    let interval = setInterval(() => {
        count = count + passive;
        if (passive >= 10) {
            console.log("im running");
            changeInterval(100);
        }
    }, 1000);

    function changeInterval(newInterval: number) {
        clearInterval(interval);
        interval = setInterval(() => {
            count = count + Math.round(passive / (1000 / newInterval));
            if (passive >= 10) {
                changeInterval(100);
            }
            if (passive < 10) {
                console.log("im running");
                changeInterval(1000);
            }
        }, newInterval);
    }

    function increasething(amount: number) {
        if (count >= amount) {
            count -= amount;
            cookiesonclick += amount;
        }
    }
    function reset() {
        count = 0;
        passive = 0;
        cookiesonclick = 1;
    }
</script>

<main>
    <div class="navbar bg-base-100">
        <div class="flex-1">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a href="/" id="link" class="btn btn-ghost normal-case text-xl"> Home</a>
          <a
            href="/cookieclicker"
            id="link"
            class="btn btn-ghost normal-case text-xl"
          >
            Cookie Clicker</a
          >
        </div>
      
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <!-- svelte-ignore a11y-missing-attribute -->
              <li><a href="/settings" class="link">Settings</a></li>
              <form method="POST" action="?/logout">
                <li>
                  <button>Log Out</button>
                </li>
              </form>
            </ul>
          </div>
        </div>
      </div>

   <br>
    

    <div class="flex w-full">
        <div
            class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        >
            Total Cookies
            <br>
            {count}
            
        </div>
        <div class="divider divider-horizontal" />
        <div
            class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        >
            Cookies On Click
            <br>
            {cookiesonclick}
            
        </div>
        <div class="divider divider-horizontal" />
        <div
            class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        >
            {passive}
            <br>
            Cookies per Second
        </div>
    </div>
    <br>
    <div>
        <button class="btn btn-circle btn-outline buttonsize buttonimage1" on:click={() => {
            onclick();
            increasetotalclicks(1);
        }}>
       
    </div>

    <br />
    <br />

    <div class="column" >

        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(1);
            }}
        >
            +1cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(5);
            }}
        >
            +5cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(10);
            }}
        >
            +10cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(20);
            }}
        >
            +20cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(50);
            }}
        >
            +50cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(200);
            }}
        >
            +200cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(500);
            }}
        >
            +500cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(1000);
            }}
        >
            +1000cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(3000);
            }}
        >
            +3000cps Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasething(10000);
            }}
        >
            +10000  cps Cost:
        </button>
        
        
        <br />
        <p id="notblacktext">Increase Passive</p>
        <br />

        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(1);
            }}
        >
            +1 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(5);
            }}
        >
            +5 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(10);
            }}
        >
            +10 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(20);
            }}
        >
            +20 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(50);
            }}
        >
            +50 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(200);
            }}
        >
            +200 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(500);
            }}
        >
            +500 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(1000);
            }}
        >
            +1000 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(3000);
            }}
        >
            +3000 Cost:
        </button>
        <button
            class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            on:click={() => {
                increasepassive(10000);
            }}
        >
            +10000 
            <br>
            Cost:
        </button>
    </div>

    <form method="post" action="?/save" use:enhance>
        <input type="hidden" name="count" value={count} />
        <input type="hidden" name="cookiesonclick" value={cookiesonclick} />
        <input type="hidden" name="passive" value={passive} />
        <input type="hidden" name="totalclicks" value={totalclicks} />
        <button type="submit">Save Progress</button>
    </form>

    <button on:click={reset}> Reset </button>

   
</main>


<style>

    main {
        background-image: url("$lib/wp8697793.jpg");
        background-color: #333f48;
        background-size: 100%;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
        height: 100%;
    }

    button {
        font-size: medium;
    }

    .column {
        display: grid;
        width: 40em;
        margin-left: 1280px;
        gap: 20px;
        overflow-y: scroll;
        height: calc(100% - 200px);
        position: absolute;
        right: 0px;
        top: 200px;
        border-width: 20px;
        border-color: #333f48;
        
    }

    #notblacktext {
        color: orangered;
        font-size: larger;
    }
    .flexrow {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .buttonsize {
        height: 36em;
        width: 36em;
        
    }
    .buttonimage1 {
        background-image: url("$lib/oabama.png");
        background-size: cover;
        height: 36em;
        width: 36em;

    }

    
</style>
