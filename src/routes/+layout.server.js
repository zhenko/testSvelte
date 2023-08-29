export const load = async () => {
	let taskOrder = await fetch('https://api.entriwise.com/mock/test-task-orders').then((res) =>
		res.json()
	);

	let taskItems = await fetch('https://api.entriwise.com/mock/test-task-items').then((res) =>
		res.json()
	);

	return { taskOrder, taskItems };
};
