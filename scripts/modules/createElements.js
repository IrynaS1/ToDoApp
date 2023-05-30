import { deleteInputValue } from './events.js';

const container = document.querySelector('.app-container');
container.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

const createTitle = () => {
	const title = document.createElement('h3');
	title.textContent = 'Todo App';

	container.append(title);

	return title;
};

const createForm = () => {
	const form = document.createElement('form');
	form.classList.add('d-flex', 'align-items-center', 'mb-3');

	container.append(form);

	return form;
};

const createInput = () => {
	const label = document.createElement('label');
	label.classList.add('form-group', 'me-3', 'mb-0');

	const input = document.createElement('input');
	input.classList.add('form-control');

	const form = document.querySelector('.mb-3');

	label.prepend(input);
	form.prepend(label);

	return {
		label,
		input,
	};
};

const createButtons = () => {
	const form = document.querySelector('.mb-3');

	const buttonSave = document.createElement('button');
	buttonSave.classList.add('btn', 'btn-primary', 'me-3');
	buttonSave.setAttribute('disabled', '');
	buttonSave.textContent = 'Сохранить';

	form.append(buttonSave);

	const buttonReset = document.createElement('button');
	buttonReset.classList.add('btn', 'btn-warning');
	buttonReset.textContent = 'Очистить';

	form.append(buttonReset);

	return {
		buttonSave,
		buttonReset,
	};
}

const createTable = () => {
	const tableWrapper = document.createElement('div');
	tableWrapper.classList.add('table-wrapper');
	container.append(tableWrapper);

	const table = document.createElement('table');
	table.classList.add('table', 'table-hover', 'table-bordered');
	tableWrapper.prepend(table);

	const thead = document.createElement('thead');
	table.prepend(thead);

	const trHead = document.createElement('tr');
	thead.prepend(trHead);
	trHead.innerHTML = `<tr>
	<th>№</th>
	<th>Задача</th>
	<th>Статус</th>
	<th>Действия</th>
	</tr>`;

	const tbody = document.createElement('tbody');
	table.append(tbody);

	/* 	const trBody = document.createElement('tr');
		trBody.classList.add('table-light');
	
		tbody.prepend(trBody); */

	return {
		table,
		thead,
		tbody,
		//trBody,
	};
};

const createLine = () => {
	const tbody = document.getElementsByTagName('tbody');

	const trBody = document.createElement('tr');
	trBody.classList.add('table-light');
	tbody[0].insertAdjacentElement('afterbegin', trBody);

	const td = `<td></td>
	<td class="task"></td>
	<td>В процессе</td>
	<td>
<button class="btn btn-danger">Удалить</button>
<button class="btn btn-success">Завершить</button>
	</td>`;

	trBody.insertAdjacentHTML('afterBegin', td);

	return td;
};

const addNumberRow = () => {
	const td = document.getElementsByTagName('td');
	const tdArray = Array.from(td);

	let j = 1;

	for (let i = 0; i < tdArray.length; i = i + 4) {
		tdArray[i].textContent = j;
		j++;
	}
}

const addItem = (inputValue) => {
	const td = createLine();

	const task = document.querySelector('.task');
	task.textContent = inputValue;

	deleteInputValue();

	addNumberRow();
};

export {
	createTitle,
	createForm,
	createInput,
	createButtons,
	createTable,
	createLine,
	addItem,
	addNumberRow,
};