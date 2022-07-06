<script lang="ts">
	import Chart from 'chart.js/auto';
	import { afterUpdate } from 'svelte';

	let ctx;
	let chartCanvas: HTMLCanvasElement;

	const createChart = () => {
		ctx = chartCanvas.getContext('2d') as CanvasRenderingContext2D;
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: [0, 10, 5, 2, 20, 30, 45]
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
	<canvas bind:this={chartCanvas} id="mortgageChart" />
</div>

