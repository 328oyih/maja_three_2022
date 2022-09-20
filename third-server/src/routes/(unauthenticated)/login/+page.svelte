<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<form method="POST" action="?/login">
	<input type="text" name="username" />
	<input type="passowrd" name="password" />
	<button>LOGIN</button>
	{#if form?.incorrect}
		<p>incorrect</p>
	{/if}
</form>
