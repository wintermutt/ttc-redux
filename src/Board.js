import { useSelector } from 'react-redux'
import Square from './Square'

const repeat = (times) => [...Array(times).keys()]

export default function Board() {
	const { player, winner } = useSelector(state => state.game)

	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${player}`

	return (
		<div>
			<div className="status">
				{status}
			</div>
			<div className="board">
				{repeat(9).map(i => <Square key={i} id={i} />)}
			</div>
		</div>
	)
}