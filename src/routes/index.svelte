<script lang="ts">
	import { Results, MortgageForm, Header, Info } from '$lib/components';
	import { MortgageStore } from '../stores';

	// functions for calculating the output
	// M = P [i*(1+i)^n]/[(1+i)^n-1]
	// M = Monthly mortgage payment (principal plus interest)
	// P = Principal (i.e., the amount of the loan)
	// i = Your monthly interest rate (Your lender likely lists it as an annual percentage rate (APR), so to find the monthly interest rate, divide the APR by 12.)
	// n = How many payments you’ll make over the life of the loan (For a 30-year mortgage, that’s 360 payments: 30 years x 12 months per year.)
	let homePrice = $MortgageStore.HomePrice;
	let downPayment = $MortgageStore.DownPayment;
	let apr = $MortgageStore.InterestRate;
	let loanTerm = $MortgageStore.LoantTerm;

	const monthlyPayment = (
		homePrice: number,
		downPayment: number,
		apr: number,
		loanTerm: number
	) => {
		const loanAmount = homePrice - downPayment;
		const i = (apr * 0.01) / 12;
		const n = loanTerm * 12;
		const m = (loanAmount * (i * (i + 1) ** n)) / ((1 + i) ** n - 1);
		return m;
	};

	// const calculateMonthlyPayment = (loanAmount: number, loanTerm: number, interest: number) => {
	// 	const i = interest / (12 * 100);
	// 	const n = loanTerm * 12;
	// 	const r = 1 / (1 + i);
	// 	return loanAmount * ((1 - r) / (r - Math.pow(r, n + 1)));
	// };
	// const calculateTotalPayment = (loanAmount: number, loanTerm: number, interest: number) => {
	// return calculateMonthlyPayment(loanAmount, loanTerm, interest) * loanTerm * 12;
	// };

</script>

<Header />
<Info />
<div class="flex">
	<MortgageForm />
	<Results />
</div>
