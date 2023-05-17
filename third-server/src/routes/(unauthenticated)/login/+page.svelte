<script lang="ts">
	import type { ActionData } from "./$types";
	export let form: ActionData;
</script>

<form method="POST" action="?/login">
	<h1>LOGIN</h1>
	<div>
		<br>
		<!-- <input placeholder="Username"type="text" name="username" /> -->
		<input type="text" placeholder="Username" class="input input-bordered input-primary w-full max-w-xs" name="username" />
		<br>
		<input type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" name="password" />
		<br>
		<br>
		<button class="btn btn-xs sm:btn-xs md:btn-lg lg:btn-md">Login</button>
	</div>
	{#if form?.incorrect}
		<br>
		<div id="alert" class="alert alert-error shadow-lg">
			<div>
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Error!</span>
			</div>
		</div>
	{/if}

	<div id="Registerlink">
		<a href="/register"class="link">register</a>
	</div>
	<button class="btn btn-xs sm:btn-xs md:btn-lg lg:btn-md">
		<a href="/register"class="link">register</a>
	</button>
</form>


<style>

	/* #Login_failed {
		color: red;
		font-size: 20px;
		-webkit-text-stroke-color: rgb(126, 0, 0);
		-webkit-text-stroke-width: 0.5px;
	} */

	input{
		margin-left: 25px;
	}
	button {
		margin-left: 25px;
	}
	#alert {
		margin-left: 25px;
	}
	#Registerlink {
		position: absolute;
		bottom: 0;
		left: 0;

	}
</style>