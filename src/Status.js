import { useSelector } from 'react-redux'

export default function Status() {
	const { player, winner } = useSelector(state => state.game)

	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${player}`

	return (
		<>
			<div>{status}</div>

			<style jsx>{`
				div {
					margin-bottom: 10px;
				}
			`}</style>
		</>
	)
}