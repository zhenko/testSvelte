<script>
	import { getRate } from '$lib/utils/getRate';
	import { onMount } from 'svelte';
	import { format } from 'date-fns';

	export let data;

	let items = data.taskItems.items;
	let orders = data.taskOrder.orders;

	let combinedArray = [];

	for (let item of items) {
		let order = orders.find((order) => order.itemId === item.itemId);

		if (order) {
			combinedArray.push({
				itemId: item.itemId,
				itemName: item.itemName,
				amount: item.amount,
				currency: item.currency,
				orderId: order ? order.orderId : 'N/A',
				date: order ? order.date : 'N/A'
			});
		}
	}

	let rates;
	let ordersConverted = [];
	onMount(async () => {
		rates = await getRate();

		function convertCurrency(amount, currencyIn, currencyOut) {
			if (currencyIn === currencyOut) {
				return amount;
			}

			const rateIn = rates[currencyIn];
			const rateOut = rates[currencyOut];

			if (rateIn && rateOut) {
				return (amount / rateIn) * rateOut;
			} else {
				console.log('Invalid exchange rates for conversion.');
				return null;
			}
		}

		ordersConverted = combinedArray.map((order) => {
			const amountInUSD = convertCurrency(order.amount, order.currency, 'USD');
			return {
				...order,
				amount: amountInUSD,
				currency: 'USD'
			};
		});
	});
	function formatDate(inputDate) {
		const date = new Date(inputDate);
		return format(date, 'MMM dd');
	}
</script>

<div class="container">
	<div class="head">Item Name</div>
	<div class="head">Order ID</div>
	<div class="head">Order Date</div>
	<div class="head">Amount</div>
	{#each ordersConverted as item}
		<div>{item.itemName}</div>
		<div>{item.itemId}</div>
		<div>{formatDate(item.date)}</div>
		<div>{item.amount}</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 10px;
	}
	.head {
		background-color: pink;
	}
</style>
