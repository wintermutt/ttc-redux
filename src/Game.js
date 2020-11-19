import Status from './Status'
import Board from './Board'

export default function Game() {
	return (
		<>
			<div className="game">
				<div>
					<Status/>
					<Board />
				</div>
				<div className="game-info">
					<div>{/* TODO */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>

			<style jsx>{`
				.game {
					display: flex;
					flex-direction: row;
				}

				.game-info {
					margin-left: 20px;
				}
	
				ol, ul {
					padding-left: 30px;
				}
			`}</style>
		</>
	)
}
