import React, {
  createContext,
  memo,
  useContext,
  useReducer,
  useState,
} from 'react'
import './App.css'

import Sidebar from './components/Sidebar'
import MainArea from './components/MainArea'
import Footer from './components/Footer'

import AppContext from './AppContext'
import DispatchContext from './DispatchContext'

const LoveContext = createContext()

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'incrementLikes':
      return { ...state, likes: state.likes + 1 }
    case 'changeSize':
      return { ...state, size: action.value }
    case 'changeColor':
      return { ...state, color: action.value }
    case 'changeColorAndSize':
      return { ...state, color: action.value.color, size: action.value.size }
  }
}

const initialState = {
  size: 25,
  color: 'skyblue',
  likes: 0,
}

const App = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState)
  const [loveState, setLoveState] = useState({ male: 'prem', female: 'meeru' })

  return (
    <LoveContext.Provider value={loveState}>
      <DispatchContext.Provider value={dispatch}>
        <AppContext.Provider value={state}>
          <div className='grid-parent'>
            <div className='header'>
              <h1>Welcome To Our App</h1>
              <p>
                The current size is {state.size} and the current color is {state.color}.
              </p>
              <p>
                This page has been liked <strong>{state.likes}</strong> times.
              </p>
            </div>
            <Sidebar />
            <MainArea />
            <Footer />
            <MemoizedExtraFooter />
          </div>
        </AppContext.Provider>
      </DispatchContext.Provider>
    </LoveContext.Provider>
  )
}

const ExtraFooter = () => {
  const LoveState = useContext(LoveContext)

  console.log('Imagine this function is slow or expensive to run')

  return (
    <div>
      <p>
        {LoveState.male} Loves {LoveState.female}
      </p>
      <p>Prem Loves Meeru</p>
    </div>
  )
}
const MemoizedExtraFooter = memo(ExtraFooter)

export default App
