import React from 'react';
import { connect } from 'react-redux';

function toggleLesson(module, lesson) {
	return {
		type: 'TOGGLE_LESSON',
		module,
		lesson
	};
}

const Sidebar = ({ modules, dispatch }) => (
	<aside>
		{modules.map(module => (
			<div key={module.id}>
				<strong>{module.title}</strong>
				<ul>
					{module.lessons.map(lesson => (
						<li key={lesson.id}>
							{lesson.title}
							<button onClick={() => dispatch(toggleLesson(module, lesson))}>
								Select
							</button>
						</li>
					))}
				</ul>
			</div>
		))}
	</aside>
);

export default connect(state => ({ modules: state.modules }))(Sidebar);
