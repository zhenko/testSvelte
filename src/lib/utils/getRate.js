export async function getRate() {
	let rate = await fetch('https://api.exchangerate.host/latest').then((res) => res.json());
	return rate.rates;
}
