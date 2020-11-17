import { useSelector, useDispatch } from 'react-redux'
import gameSlice from './features/gameSlice'

export default function Square({ id }) {
	const value = useSelector(state => state.game.squares[id])
	
	const dispatch = useDispatch()
	const { chooseSquare } = gameSlice.actions
	
	return (
		<>
			<button onClick={() => dispatch(chooseSquare(id))}>
				{value}
			</button>

			<style jsx>{`
				button {
					display: inline-block;
					background: #fff;
					border: 1px solid #999;
					font-size: 24px;
					font-weight: bold;
					line-height: 34px;
					height: 34px;
					margin: 0;
					margin-right: -1px;
					margin-bottom: -1px;
					padding: 0;
					text-align: center;
					width: 34px;
				}

				button:focus {
					outline: none;
				}

				.kbd-navigation button:focus {
					background: #ddd;
				}
			`}</style>
		</>
	)
}