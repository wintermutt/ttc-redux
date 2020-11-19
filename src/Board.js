import Square from './Square'

const repeat = (times) => [...Array(times).keys()]

export default function Board() {
	return (
		<>
			<div>
				{repeat(9).map(i => <Square key={i} id={i} />)}
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