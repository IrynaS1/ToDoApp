import {
	createTitle,
	createForm,
	createInput,
	createButtons,
	createTable,
	addItem,
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


{
	const user = prompt('Ваше имя:', '');

	const init = (user) => {
		createTitle(user),

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

		const buttonSave = document.querySelector('.btn-primary');

		buttonSave.addEventListener('click', (e) => {
			e.preventDefault();
			addItem(inputValue);
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

	init(user);
};