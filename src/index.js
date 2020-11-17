import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './features/gameSlice'
import Game from './Game'
import './global.css'

const store = configureStore({
	reducer: combineReducers({
		game: gameSlice.reducer
	})
})

ReactDOM.render(
	<Provider store={store}>
		<Game />
	</Provider>,
	document.getElementById('root')
);