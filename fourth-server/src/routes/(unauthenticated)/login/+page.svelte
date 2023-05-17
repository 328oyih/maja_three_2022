<script lang="ts">
	import type { ActionData } from "./$types";
	import { enhance } from "$app/forms";
	export let form: ActionData;
</script>

<main>
	<form method="POST" action="?/login" use:enhance>
		<div>
			<br />
			<!-- <input placeholder="Username"type="text" name="username" /> -->
			<input
				type="text"
				placeholder="Username"
				class="input input-bordered input-primary w-full max-w-xs"
				name="username"
				id="username"
				required
			/>
			<br />
			<input
				type="password"
				placeholder="Password"
				class="input input-bordered input-primary w-full max-w-xs"
				name="password"
			/>
			<br />
			<br />
			<button
				type="submit"
				class="btn btn-xs sm:btn-xs md:btn-lg lg:btn-md">Login</button
			>
		</div>

		{#if form?.incorrect}
			<br>
			<div id="alert" class="alert alert-error shadow-lg">
				<div>
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				<span>{form.incorrect}</span>
				</div>
			</div>
		{/if}

		<div id="Registerlink">
			<a href="/register" class="link">register</a>
		</div>
		<button type="submit" class="btn btn-xs sm:btn-xs md:btn-lg lg:btn-md">
			<a href="/register" class="link">register</a>
		</button>
	</form>
</main>

<style>
	main {
		background-image: url("$lib/crane.jpg");
		background-size: cover;
		min-height: 100vh;
	}
	/* #Login_failed {
		color: red;
		font-size: 20px;
		-webkit-text-stroke-color: rgb(126, 0, 0);
		-webkit-text-stroke-width: 0.5px;
	} */

	input {
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
