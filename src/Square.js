import { useSelector, useDispatch } from 'react-redux'
import gameSlice from './features/gameSlice'

export default function Square({ id }) {
	const value = useSelector(state => state.game.squares[id])
	
	const dispatch = useDispatch()
	const { chooseSquare } = gameSlice.actions
	
	return (
		<button
			className="square"
			onClick={() => dispatch(chooseSquare(id))}
		>
			{value}
		</button>
	)
}