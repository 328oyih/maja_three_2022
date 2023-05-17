<!-- VANLIGA SIDAN MED ALL INFO-->

<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  function abreviator(value: number) {
    if (value >= 1000000000000) {
      return `${Math.round(value / 100000000000) / 10}T`;
    } else if (value >= 1000000000) {
      return `${Math.round(value / 100000000) / 10}B`;
    } else if (value >= 1000000) {
      return `${Math.round(value / 100000) / 10}M`;
    } else if (value >= 1000) {
      return `${Math.round(value / 100) / 10}K`;
    } else {
      return value;
    }
  }
</script>

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
<body />

<main>
  <br />
  <!-- <p>{_id}</p> -->
  <div class="frame">
    <div class="stats stats-vertical shadow">
      <div class="stat">
        <div class="stat-title">Welcome User!</div>
        <div class="stat-value">{data?.username}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Total Cookies:</div>
        <div class="stat-value">{abreviator(data?.clicker?.count ?? 0)}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Total Clicks:</div>
        <div class="stat-value">
          {abreviator(data?.clicker?.totalclicks ?? 0)}
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    background-image: url("$lib/203518.jpg");
    min-height: 100vh;
    background-size: cover;
  }
  .frame {
    position: absolute;
    right: 1%;
    bottom: 60%;
    width: fit-content;
    height: 10em;
  }
  a:link {
    text-decoration: none;
  }
</style>
