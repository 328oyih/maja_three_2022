<main>
	<body>
		
		
		<form method="POST" action="?/deleteaccount">
			<button>DELETE ACCOUNT</button>
		</form>
		
		<div class="navbar bg-base-100">
			<div class="flex-1">
			<div class="flex-1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a href="/"id="link" class="btn btn-ghost normal-case text-xl"> Home</a>
				<a href="/cookieclicker"id="link" class="btn btn-ghost normal-case text-xl"> Cookie Clicker</a>
			  </div>
		</div>
		<div class="flex-none">
		  
		  <div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
			  <div class="w-10 rounded-full">
				<img src="https://placeimg.com/80/80/people" />
			  </div>
			</label>
			<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
			  <li>
				<a class="justify-between">
				  Profile
				</a>
			</li>
			  <li><a href="/settings"class="link">Settings</a></li>
			  <form method="POST" action="?/logout"><li>
				<button>LOGOUT</button>
			</li></form>
			</ul>
		  </div>
		</div>
	  </div>


	  <button class="btn btn-xs sm:btn-xs md:btn-lg lg:btn-md">
		  <form method="POST" action="?/deleteaccount">
			<button>DELETE ACCOUNT</button>
		</form>

	  </button>





	  <form action="/action_page.php">
		<label for="img">Select image:</label>
		<input type="file" id="img" name="img" accept="image/*">
		<input type="submit">
	  </form>


	</body>
</main>







<style>


	main{
		/* background-image: url("$lib/203518.jpg"); */
		background-image: url("$lib/203545.jpg");
		background-size: cover;
		min-height: 100vh;
	}
	
</style>