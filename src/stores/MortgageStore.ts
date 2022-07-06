import { writable } from 'svelte/store'

type Mortgage = {
  HomePrice: number,
  DownPayment: number,
  LoanAmount: number,
  LoantTerm: number,
  InterestRate: number,
  PropertyTaxes: number,
  Insurance: number
}

const default_mortage: Mortgage = {
  HomePrice: 0,
  DownPayment: 0,
  LoanAmount: 0,
  LoantTerm: 0,
  InterestRate: 0,
  PropertyTaxes: 0,
  Insurance: 0
}

export const MortgageStore = writable(default_mortage);

