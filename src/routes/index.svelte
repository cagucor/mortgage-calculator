<script lang="ts">
	import { History, Results, MortgageForm, Header, Info } from '$lib/components';
	import { MortgageStore } from '../stores';

	$: index = 0;
</script>

<Header />
<Info />
<div class="flex p-10">
	<MortgageForm bind:index />
	<Results {index} />
</div>
<div class="text-center">
	<History bind:index />
</div>
