import React, { useState } from "react"

import GoalList from "./components/Goals/GoalList/GoalList"
import Input from "./components/Goals/Input/Input"
import "./App.css"

const App = () => {
	const [goals, setGoals] = useState([
		{ text: "Practice React", id: "g1" },
		{ text: "Read a book", id: "g2" },
	])

	const addGoalHandler = (enteredText) => {
		setGoals((prevGoals) => {
			const updatedGoals = [...prevGoals]
			updatedGoals.unshift({
				text: enteredText,
				id: Math.random().toString(),
			})
			return updatedGoals
		})
	}

	const deleteItemHandler = (goalId) => {
		setGoals((prevGoals) => {
			const updatedGoals = prevGoals.filter(
				(goal) => goal.id !== goalId
			)
			return updatedGoals
		})
	}

	let content = (
		<p style={{ textAlign: "center" }}>
			No goals found. Maybe add one?
		</p>
	)

	if (goals.length > 0) {
		content = (
			<GoalList
				items={goals}
				onDeleteItem={deleteItemHandler}
			/>
		)
	}

	return (
		<div>
			<section id="goal-form">
				<Input onAddGoal={addGoalHandler} />
			</section>
			<section id="goals">{content}</section>
		</div>
	)
}

export default App
