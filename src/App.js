import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises/Exercises';
import { muscles, exercises } from './store.js';
import { object } from 'prop-types';


export default class extends Component {
//TODO: Refactor with hooks
  state = {
    exercises,
    exercise: {},
    editMode: false
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})
    return Object.entries(
      this.state.exercises.reduce(((exercises, exercise) => {
        const { muscles } = exercise;
        console.log(exercise)

        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }), initExercises)
    )
  }

  handleCatSelected = category => {
    this.setState({
      category
    })
  }

  handleExSelected = id => {
    // console.log('Reached here?')
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => (ex.id === id)),
      editMode: false
    }))
  }

  handleExSubmit = (exercise) => {
    console.log(exercise);
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises, 
        exercise
      ]
    }));
  }

  handleExDelete = (id) => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
    }))
  }

  handleEditSelect = (id) => {
    console.log("Edit button pressed");
    console.log("Editmode: " + this.state.editMode)
      this.setState(({ exercises }) => ({
        exercise: exercises.find(ex => (ex.id === id)),
        editMode: true
      }))
  }

  handleExEdit = (exercise) => {
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ], 
      exercise
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    console.log(exercises);
    console.log(typeof(exercises))
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header 
        muscles={muscles}
        onCreate={this.handleExSubmit}
        />

        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          editMode={this.state.editMode}
          onEdit={this.handleExEdit}
          onSelect={this.handleExSelected}
          onDelete={this.handleExDelete}
          onSelectEdit={this.handleEditSelect}
        />

        <Footer
          category= {category}
          muscles={muscles}
          onSelect={ this.handleCatSelected}
        />
      </Fragment>
    )
  };
};
