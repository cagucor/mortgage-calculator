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
	<div class="header">
        <div>
          <p>Estimate your monthly mortgage payment with our</p>
          <p>Mortgage & Home Load Calculator</p>
        </div>
        <button id="history">History</button>
    </div>
	<div class="main">
		<MortgageForm />
		<Chart />
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		background-color: aquamarine;
	}

	#history {
		margin: 30px;
		height: 30px;
	}

	.main {
  		display: flex;
  		min-height: 100vh;
	}
</style>