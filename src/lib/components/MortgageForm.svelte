<script lang="ts">
	function onSubmit(e: Event) {
		const formData = new FormData(e.target as HTMLFormElement);
		console.log('hello');
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<div class="grid gap-6 mb-6 lg:grid-cols-2">
		<div>
			<label for="home_cost" class="block mb-2 text-sm font-medium text-gray-900 ">Home Cost</label>
			<input
				type="text"
				id="home_cost"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
				placeholder="$"
				required
			/>
		</div>
		<div>
			<label for="down_payment" class="block mb-2 text-sm font-medium text-gray-900 "
				>Down Payment</label
			>
			<input
				type="text"
				id="down_payment"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
				placeholder="$"
				required
			/>
		</div>
		<div>
			<label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
			<input
				type="text"
				id="company"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
				placeholder="Flowbite"
				required
			/>
		</div>
	<button
		type="submit"
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
		>Submit</button
	>
</form>
