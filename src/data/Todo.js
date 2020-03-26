import Immutable from 'Immutable';

const Todo = Immutable.Record({
	id: '',
	complete: false,
	text: '',
});

export default Todo;