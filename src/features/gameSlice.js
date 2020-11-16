import { createSlice } from '@reduxjs/toolkit'

const players = ['✖️', '⭕️']

const determineWinner = (squares) => {
	const lines = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
		[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
	]

	for (const line of lines) {
		const [a, b, c] = line.map(v => squares[v])
		if (a && a === b && a === c) return a
	}

	return null
}

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		squares: Array(9).fill(null),
		player: players[0],
		winner: null
	},
	reducers: {
		chooseSquare(state, action) {
			const { squares, player, winner } = state
			const id = action.payload
			
			if (winner || squares[id]) return

			squares[id] = player
			state.player = player === players[0] ? players[1] : players[0]
			state.winner = determineWinner(squares)
		}
	}
})

export default gameSlice