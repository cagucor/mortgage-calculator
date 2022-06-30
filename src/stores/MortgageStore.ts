import { writable } from 'svelte/store'

type Mortgage = {
  HomeValue: Number,
  DownPayment: Number,
  LoanAmount: Number,
  InterestRate: Number,
  LoantTerm: Number,

}

const MortgageStore = writable();
export default MortgageStore
