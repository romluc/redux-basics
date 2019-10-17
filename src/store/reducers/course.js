const INITIAL_STATE = {
	activeLesson: {},
	activeModule: {},
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

export default function course(state = INITIAL_STATE, action) {
	if (action.type === 'TOGGLE_LESSON') {
		return {
			...state,
			activeLesson: action.lesson,
			activeModule: action.module
		};
	}
	return state;
}
