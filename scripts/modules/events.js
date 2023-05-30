import { addNumberRow } from "./createElements.js";

const changeInput = () => {
	const input = document.querySelector('.form-control');

	const buttonSave = document.querySelector('.btn-primary');

	buttonSave.removeAttribute('disabled');

	const inputValue = input.value;

	return inputValue;
};

const deleteInputValue = () => {
	const input = document.querySelector('.form-control');

	const buttonSave = document.querySelector('.btn-primary');

	input.value = '';

	buttonSave.setAttribute('disabled', '');
};

const changeTaskStatus = (e, user) => {
	e.preventDefault();

	const rowParentNode = e.target.closest('.table-light');
	rowParentNode.classList.remove('table-light');
	rowParentNode.classList.add('table-success');

	const addClass = rowParentNode.childNodes[1].nextElementSibling;
	addClass.classList.add('text-decoration-line-through');

	const value = rowParentNode.childNodes[4];
	value.textContent = 'Выполнена';

	const taskValue = rowParentNode.childNodes[1].nextElementSibling.textContent;

	const userTaskList = JSON.parse(localStorage.getItem(`${user}`));

	userTaskList.find((task) => {
		if (task.text === taskValue) {
			task.status = true;
		}
	});

	localStorage.setItem(`${user}`, JSON.stringify(userTaskList));
};

const deleteTask = (e, user) => {
	e.preventDefault();

	const rowParentNode = e.target.closest('tr');

	const taskValue = rowParentNode.childNodes[1].nextElementSibling.textContent;

	const userTaskList = JSON.parse(localStorage.getItem(`${user}`));

	const indexTask = userTaskList.findIndex((task) => {
		if (task.text === taskValue) {
			return true;
		}
	});

	userTaskList.splice(indexTask, 1);

	localStorage.setItem(`${user}`, JSON.stringify(userTaskList));

	rowParentNode.remove();

	addNumberRow();
};

const deleteOverTask = (e, user) => {
	e.preventDefault();

	const rowParentNode = e.target.closest('tr');

	const taskValue = rowParentNode.childNodes[1].nextElementSibling.textContent;

	const userTaskList = JSON.parse(localStorage.getItem(`${user}`));

	const indexTask = userTaskList.findIndex((task) => {
		if (task.text === taskValue) {
			return true;
		}
	});

	userTaskList.splice(indexTask, 1);

	localStorage.setItem(`${user}`, JSON.stringify(userTaskList));

	rowParentNode.remove();

	addNumberRow();
};

export {
	changeInput,
	deleteInputValue,
	deleteTask,
	changeTaskStatus,
	deleteOverTask,
};
