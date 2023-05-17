

<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>
<body>
	<div>
		<h1>REGISTER</h1>
	</div>
</body>
<form method="POST" action="?/register">
	<input type="text" name="username" />
	<input type="passowrd" name="password" />
		<button>REGISTER</button>
	{#if form?.message}
		<p>{form.message}</p>
	{/if}
</form>

