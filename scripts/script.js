import {
	createTitle,
	createForm,
	createInput,
	createButtons,
	createTable,
	addNumberRow,
} from './modules/createElements.js';

import {
	getItemStorage,
	setItemStorage,

} from './modules/storage.js';

import {
	changeInput,
	deleteInputValue,
	deleteTask,
	deleteOverTask,
	changeTaskStatus,
} from './modules/events.js';

const user = prompt('Ваше имя:', '');
{
	const init = () => {
		console.log('user-2', user);
		createTitle(),

			createForm(),

			createInput(),

			createButtons(),

			createTable(),

			getItemStorage(user);

		const input = document.querySelector('.form-control');

		input.addEventListener('change', (e) => {
			e.preventDefault();
			changeInput();
			setItemStorage(user);
		});

		const buttonReset = document.querySelector('.btn-warning');

		buttonReset.addEventListener('click', () => {
			e.preventDefault();
			deleteInputValue();
		});

		const tbody = document.getElementsByTagName('tbody');

		tbody[0].addEventListener('click', (e) => {
			if (e.target.classList.contains('btn-danger')) {
				deleteTask(e, user);
				deleteOverTask(e, user);
			}

			if (e.target.classList.contains('btn-success')) {
				changeTaskStatus(e, user);
			}
		});

		addNumberRow();

	};

	init();
};