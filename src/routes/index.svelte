<script lang="ts">
	import { Chart, MortgageForm } from '../components';
	import { MortgageStore } from '../stores/MortgageStore.js';
	

	// functions for calculating the output 
	// M = P [i*(1+i)^n]/[(1+i)^n-1]
	// M = Monthly mortgage payment (principal plus interest)
	// P = Principal (i.e., the amount of the loan)
	// i = Your monthly interest rate (Your lender likely lists it as an annual percentage rate (APR), so to find the monthly interest rate, divide the APR by 12.)
	// n = How many payments you’ll make over the life of the loan (For a 30-year mortgage, that’s 360 payments: 30 years x 12 months per year.)
	let home_price = $MortgageStore.HomePrice;
	let down_payment = $MortgageStore.DownPayment;
	let apr = $MortgageStore.InterestRate;
	let loan_term = $MortgageStore.LoantTerm;

	const monthly_payment = (home_price: number, down_payment: number, apr: number, loan_term: number) => {
		const p = home_price - down_payment;
    	const i = apr * 0.01 / 12;
    	const n = loan_term * 12;
    	const m = p*(i*(i+1)**n)/((1+i)**n-1);
		console.log(m+"!!!!!!!!!!!!!!!!!!!!!!");
    	return m;
	}

	monthly_payment(home_price, down_payment, apr, loan_term)

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