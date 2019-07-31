import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises';
import { muscles, exercises } from './store.js';


export default class extends Component {
//TODO: Refactor with hooks
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    console.log(muscles, initExercises);

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }, initExercises)
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
      exercise: exercises.find(ex => (ex.id === id))
    }))
  }

  handleExCreate = (exercise) => {
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
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles()
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header 
        muscles={muscles}
        onExCreate={this.handleExCreate}
        />

        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExSelected}
          onDelete={this.handleExDelete}
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
