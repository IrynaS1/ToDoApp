import { addItem, createLine } from './createElements.js';

import { changeInput } from './events.js';

let taskList = [];

const getItemStorage = (user) => {
	let storageList = localStorage.getItem(`${user}`);

	if (storageList !== null) {
		taskList = JSON.parse(storageList);

		taskList.forEach(element => {
			if (element.status === false) {
				const tbody = document.getElementsByTagName('tbody');

				const trBody = document.createElement('tr');
				trBody.classList.add('table-light');
				tbody[0].insertAdjacentElement('afterbegin', trBody);

				const td = `<td></td>
								<td class="task">${element.text}</td>
								<td>В процессе</td>
								<td>
									<button class="btn btn-danger">Удалить</button>
									<button class="btn btn-success">Завершить</button>
								</td>`;

				trBody.insertAdjacentHTML('afterBegin', td);
			}

			if (element.status === true) {
				const tbody = document.getElementsByTagName('tbody');

				const trBody = document.createElement('tr');
				trBody.classList.add('table-success');
				tbody[0].insertAdjacentElement('afterbegin', trBody);

				const td = `<td></td>
								<td class="text-decoration-line-through">${element.text}</td>
								<td>Выполнена</td>
								<td>
									<button class="btn btn-danger">Удалить</button>
									<button class="btn btn-success">Завершить</button>
								</td>`;

				trBody.insertAdjacentHTML('afterBegin', td);
			}
		});
	} else {
		console.log('Нет сохраненного в ToDoList', storageList);
	}
};

//setItemStorage добавление задач в сторадж
const setItemStorage = (user) => {
	let inputValue = changeInput();

	let newTask = {
		id: Math.random().toString().substring(2, 10),
		text: `${inputValue}`,
		status: false,
	};

	taskList.push(newTask);

	localStorage.setItem(`${user}`, JSON.stringify(taskList));

	addItem(inputValue);
};

export {
	getItemStorage,
	setItemStorage,

};