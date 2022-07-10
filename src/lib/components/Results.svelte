<script lang="ts">
	import type { Mortgage } from '$lib/types';

	import { MortgageStore } from '../../stores';

	let mortgages: Mortgage[] = [];

	MortgageStore.subscribe((value) => (mortgages = value));

	export let index: number = 0;

	$: mortgage = mortgages[index];

	const calculateMonthlyPayment = (loanAmount: number, loanTerm: number, interest: number) => {
		const i = interest / (12 * 100);
		const n = loanTerm * 12;
		const r = 1 / (1 + i);
		return loanAmount * ((1 - r) / (r - Math.pow(r, n + 1)));
	};

	$: monthly = calculateMonthlyPayment(
		mortgage.HomePrice - mortgage.DownPayment,
		mortgage.LoantTerm,
		mortgage.InterestRate
	);

	$: total = monthly * mortgage.LoantTerm * 12;
</script>

<div class="flex-grow">
	{#if !isNaN(monthly)}
		<h1 class="text-center p-5 mt-20 text-2xl font-medium">
			Your monthly repayment is ${Math.ceil(monthly).toLocaleString()}
		</h1>
		<h1 class="text-center p-5 text-2xl font-medium">
			Your total loan repayments add to ${Math.ceil(total).toLocaleString()}
		</h1>
	{/if}
</div>
