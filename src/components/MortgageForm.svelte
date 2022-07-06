<script lang="ts">
	import { MortgageStore } from "../stores/MortgageStore.js"
  
  
  // let home_price: number;
	// let down_payment: number;
	// let loan_term: number;
	// let apr: number;
	// let property_taxes: number;
	// let insurance: number;
	// $: console.log(home_price);
  
  $: console.log($MortgageStore.HomePrice + "????")

</script>

<div class="Input">
	<div class="Input-Container">
	  <label for="home_cost">Enter Home Price</label>
	  <input type="text" id="home_cost" bind:value={$MortgageStore.HomePrice}/>
	</div>
	<div class="Input-Container">
    <label for="down_payment">Enter Down Payment</label>
	  <input type="text" id="down_payment" bind:value={$MortgageStore.DownPayment}/>
	</div>
	<div class="Input-Container">
    <label for="loan_term">Enter Loan Term</label>
	  <input type="text" id="loan_term" bind:value={$MortgageStore.LoantTerm}/>
	</div>
	<div class="Input-Container">
	  <label for="apr">Enter APR</label>
	  <input type="text" id="apr" bind:value={$MortgageStore.InterestRate}/>
	</div>
	<div class="Input-Container">
    <label for="property_taxes">Property Taxes</label>
	  <input type="text" id="property_taxes" bind:value={$MortgageStore.PropertyTaxes}/>
	</div>
	<div class="Input-Container">
    <label for="insurance">Enter Homeowners insurance</label>
	  <input type="text" id="insurance" bind:value={$MortgageStore.Insurance}/>
	</div>
	<!-- <button>Submit</button> -->
</div>


<style>
  .Input-Container {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }
</style>