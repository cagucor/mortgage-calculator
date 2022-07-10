<script lang="ts">
	import type { Mortgage } from '$lib/types';

	import { MortgageStore } from '../../stores';

	let defaultMortgage: Mortgage = {
		HomePrice: 0,
		DownPayment: 0,
		LoantTerm: 0,
		LoanAmount: 0,
		Insurance: 0,
		InterestRate: 0,
		PropertyTaxes: 0
	};

	export let index = 0;

	let mortgage = structuredClone(defaultMortgage);

	let mortgages: Mortgage[];

	MortgageStore.subscribe((value) => (mortgages = value));

	const onSubmit = () => {
		index++;
		MortgageStore.update((mortgages) => [...mortgages, structuredClone(mortgage)]);
	};

	const onReset = () => {
		index = 0;
		MortgageStore.set([defaultMortgage]);
	};
</script>

<form on:submit|preventDefault>
	<div class="flex flex-col m-2">
		<label class="mb-2 text-lg font-medium" for="home_cost">Enter Home Price </label>
		<input
			class="border-gray-300 rounded-lg shadow-sm"
			placeholder="$"
			type="number"
			id="home_cost"
			bind:value={mortgage.HomePrice}
			required
		/>
	</div>
	<div class="flex flex-col m-2">
		<label class="mb-2 text-lg font-medium" for="down_payment">Enter Down Payment</label>
		<input
			class="border-gray-300 rounded-lg shadow-sm"
			placeholder="$"
			type="number"
			id="down_payment"
			bind:value={mortgage.DownPayment}
			required
		/>
	</div>
	<div class="flex flex-col m-2">
		<label class="mb-2 text-lg font-medium" for="loan_term">Enter Loan Term</label>
		<input
			class="border-gray-300 rounded-lg shadow-sm"
			placeholder="$"
			type="number"
			id="loan_term"
			bind:value={mortgage.LoantTerm}
			required
		/>
	</div>
	<div class="flex flex-col m-2">
		<label class="mb-2 text-lg font-medium" for="apr">Enter APR</label>
		<input
			class="border-gray-300 rounded-lg shadow-sm"
			placeholder="%"
			type="number"
			id="apr"
			bind:value={mortgage.InterestRate}
			required
		/>
	</div>
	<div>
		<button
			on:click={onSubmit}
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>Submit</button
		>
		<button
			on:click={onReset}
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		>
			Reset
		</button>
	</div>
</form>
