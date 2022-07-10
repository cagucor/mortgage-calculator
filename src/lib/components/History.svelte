<script lang="ts">
	import type { Mortgage } from '$lib/types';

	import { MortgageStore } from '../../stores';

	let history: Mortgage[] = [];

	MortgageStore.subscribe((value) => (history = value.slice(1)));

	export let index = 0;

	const onClick = (i: number) => {
		index = i;
	};
</script>

<h1 class="font-medium text-lg p-3">History:</h1>
<ul class="flex justify-center">
	{#each history as _, i}
		<li
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-0.5 mr-1 mb-1 focus:outline-none"
			on:click={() => onClick(i + 1)}
		>
			#{i + 1}
		</li>
	{/each}
</ul>
