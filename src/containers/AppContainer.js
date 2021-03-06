import AppView from '../views/AppView';
import {Containers} from 'flux/utils';
import TodoStore from '../data/TodoStore';

function getStore() {
	return [
		TodoStore,
	];
}

function getState() {
	return {
		todos: TodoStore.getState(),

		onDeleteTodo: TodoActions.deleteTodo,
		onToggleTodo: TodoActions.toggleTodo,
	};
}

export default Container.createFunctional(AppView, getStore, getState);