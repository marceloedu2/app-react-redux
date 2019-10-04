import React from 'react';
import { connect } from 'react-redux'

const video = ({ activeModule, activeLesson }) => {
  return(
    <>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </>
  );
}

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(video);
