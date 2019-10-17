import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
	<div>
		<strong>Module {activeModule.title}</strong>
		<span>Class {activeLesson.title}</span>
	</div>
);

export default connect(state => ({
	activeModule: state.course.activeModule,
	activeLesson: state.course.activeLesson
}))(Video);
