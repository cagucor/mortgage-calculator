<script lang="ts">
	import type { Mortgage } from '$lib/types';

	import Chart from 'chart.js/auto';
	import { afterUpdate } from 'svelte';
	import { MortgageStore } from '../../stores';

	let mortgage: Mortgage = {
		HomePrice: 0,
		DownPayment: 0,
		LoantTerm: 0,
		LoanAmount: 0,
		Insurance: 0,
		InterestRate: 0,
		PropertyTaxes: 0
	};

	MortgageStore.subscribe((value) => (mortgage = value));

	const calculateMonthlyPayment = (loanAmount: number, loanTerm: number, interest: number) => {
		const i = interest / (12 * 100);
		const n = loanTerm * 12;
		const r = 1 / (1 + i);
		return loanAmount * ((1 - r) / (r - Math.pow(r, n + 1)));
	};

	const calculateTotalPayment = (loanAmount: number, loanTerm: number, interest: number) => {
		return calculateMonthlyPayment(loanAmount, loanTerm, interest) * loanTerm * 12;
	};

	$: monthly = calculateMonthlyPayment(
		mortgage.HomePrice - mortgage.DownPayment,
		mortgage.LoantTerm,
		mortgage.InterestRate
	);

	$: total = monthly * mortgage.LoantTerm * 12;

	$: console.log(mortgage);
	$: console.log(monthly);
	// $: data = range(0, total, monthly);

	function range(start: number, end: number, step = 1, stepCount = 0) {
		const allNumbers = [start, end, step, stepCount].every(Number.isFinite);

		if (!allNumbers) {
			throw new TypeError('range() expects only finite numbers as arguments.');
		}

		if (stepCount != 0) {
			step = Math.abs(end - start) / stepCount;
		}

		if (step <= 0) {
			throw new Error('step must be a number greater than 0.');
		}

		if (start > end) {
			step = -step;
		}

		const length = Math.floor(Math.abs((end - start) / step)) + 1;

		return Array.from(Array(length), (x, index) => start + index * step);
	}

	let ctx;
	let chartCanvas: HTMLCanvasElement;

	const createChart = () => {
		ctx = chartCanvas.getContext('2d') as CanvasRenderingContext2D;
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: range(0, mortgage.LoantTerm * 12, 1),
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: data
					}
				]
			},
			options: {}
		});
	};

	afterUpdate(async () => {
		createChart();
	});
</script>

<div>
	<h1>
		The monthly payment is ${Math.ceil(monthly).toLocaleString()}, total is ${Math.ceil(
			total
		).toLocaleString()}
	</h1>
	<canvas bind:this={chartCanvas} id="mortgageChart" />
</div>
