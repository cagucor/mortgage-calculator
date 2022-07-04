<script lang="ts">
	let home_price: number;
	let down_payment: number;
	let loan_term: number;
	let apr: number;
	let property_taxes: number;
	let insurance: number;

	$: console.log(home_price);

</script>

<div class="Input">
	<div class="Input-Container">
	  <div>Enter Home Price</div>
	  <input type="text" bind:value={home_price}/>
	</div>
	<div class="Input-Container">
	  <div>Enter Down Payment</div>
	  <input type="text" bind:value={down_payment}/>
	</div>
	<div class="Input-Container">
	  <div>Enter Loan Term</div>
	  <input type="text" bind:value={loan_term}/>
	</div>
	<div class="Input-Container">
	  <div>Enter APR</div>
	  <input type="text" bind:value={apr}/>
	</div>
	<div class="Input-Container">
	  <div>Property Taxes</div>
	  <input type="text" bind:value={property_taxes}/>
	</div>
	<div class="Input-Container">
	  <div>Enter Homeowners insurance</div>
	  <input type="text" bind:value={insurance}/>
	</div>
	<button>Submit</button>
</div>
