import { createStore } from 'redux';

function reducer() {
	return {
		activeLesson: null,
		activeModule: null,
		modules: [
			{
				id: 1,
				title: 'Starting React',
				lessons: [
					{ id: 1, title: 'First class' },
					{ id: 2, title: 'Second class' }
				]
			},
			{
				id: 2,
				title: 'Learning Redux',
				lessons: [
					{ id: 3, title: 'Third class' },
					{ id: 4, title: 'Fourth class' }
				]
			}
		]
	};
}

const store = createStore(reducer);

export default store;
