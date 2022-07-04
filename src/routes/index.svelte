<script lang="ts">
	import { Chart, MortgageForm } from '../components';

	const calculateMonthlyPayment = (loanAmount: number, loanTerm: number, interest: number) => {
		const i = interest / (12 * 100);
		const n = loanTerm * 12;
		const r = 1 / (1 + i);

		return loanAmount * ((1 - r) / (r - Math.pow(r, n + 1)));
	};
	const calculateTotalPayment = (loanAmount: number, loanTerm: number, interest: number) => {
    return calculateMonthlyPayment(loanAmount, loanTerm, interest) * loanTerm * 12;
	};
</script>

<div class="flex">
	<MortgageForm />
	<Chart />
</div>
