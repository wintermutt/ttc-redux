import { useSelector } from 'react-redux'
import Square from './Square'

export default function Board() {
	const { squares } = useSelector(state => state.game)

	return (
		<>
			<div>
				{squares.map((v, i) =>
					<Square key={i} id={i} />
				)}
			</div>

			<style jsx>{`
				div {
					display: flex;
					flex-wrap: wrap;
					width: calc(34px * 3);
				}
			`}</style>
		</>
	)
}