<script lang="ts">
	import type { Mortgage } from '$lib/types';

	import { MortgageStore } from '../../stores';

	// let home_price: number;
	// let down_payment: number;
	// let loan_term: number;
	// let apr: number;
	// let property_taxes: number;
	// let insurance: number;
	// $: console.log(home_price);

	let mortgage: Mortgage = {
		HomePrice: 380000,
		DownPayment: 76000,
		LoantTerm: 30,
		LoanAmount: 0,
		Insurance: 0,
		InterestRate: 3.5,
		PropertyTaxes: 0
	};

	const onSubmit = (e: Event) => {
		MortgageStore.set(mortgage);
	};
</script>


<form on:submit|preventDefault={onSubmit}>
	<div class="flex flex-col m-2">
		<label class="form- mb-2 text-lg font-medium" for="home_cost">
			Enter Home Price &nbsp&nbsp
			<button class="tooltip">!
				<span class="tooltiptext">How much's your new home.</span>
			</button>
		</label>		
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
		<label class="mb-2 text-lg font-medium" for="down_payment">
			Down Payment &nbsp&nbsp&nbsp	&nbsp&nbsp
			<button class="tooltip">!
				<span class="tooltiptext">How much you’re paying upfront toward the purchase of the home, usually it's 20% of home's price.</span>
			</button>
		</label>
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
		<label class="mb-2 text-lg font-medium" for="loan_term">
			Enter Loan Term &nbsp &nbsp &nbsp
			<button class="tooltip">!
				<span class="tooltiptext">How long you’ll be paying off your loan. A 30-year mortgage is common (and is the default here), but other terms are also available.</span>
			</button>
		</label>
		<input
			class="border-gray-300 rounded-lg shadow-sm"
			placeholder="years"
			type="number"
			id="loan_term"
			bind:value={mortgage.LoantTerm}
			required
		/>
	</div>
	<div class="flex flex-col m-2">
		<label class="mb-2 text-lg font-medium" for="apr">
			Enter APR &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
			<button class="tooltip">!
				<span class="tooltiptext">
					A mortgage annual percentage rate (APR) includes the yearly cost of borrowing money, expressed as a percentage, and is based on the loan interest rate, mortgage points, and other homebuying costs. The default is 3.5% which is the average interest rate in NSW. 
				</span>
			</button>
		</label>
		<input
			class="border-gray-300 rounded-lg shadow-sm"
			placeholder="%"
			type="number"
			step="0.01"
			id="apr"
			bind:value={mortgage.InterestRate}
			required
		/>
	</div>
	<button
		type="submit"
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		>Submit</button
	>
</form>

<style>
	.tooltip {
		position:relative;
		display: inline-block;
		border-bottom: 1px dotted black;
		width: 25px;
		height: 25px;
		background-color: rgb(29 78 216);
		color: rgb(255 255 255);
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 300px;
		background-color: #555;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -125px;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.tooltip .tooltiptext::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #555 transparent transparent transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
</style>
