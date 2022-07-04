<script lang="ts">
	function onSubmit(e: Event) {
		const formData = new FormData(e.target as HTMLFormElement);
		console.log('hello');
	}
</script>


<form on:submit|preventDefault={onSubmit}>
	<div>
		<label for="home_cost">Home Cost</label>
		<input type="text" id="home_cost" placeholder="$" required/>
	</div>
	<div>
		<label for="down_payment">Down Payment</label>
		<input type="text" id="down_payment" placeholder="$" required/>
	</div>
	<div>
		<label for="company">Company</label>
		<input type="text" id="company" placeholder="Flowbite" required/>
	</div>
	<button>Submit</button>
</form>
