import React, { useContext } from 'react'
import AppContext from '../appContext'
import DispatchContext from '../DispatchContext'

function Sidebar() {
  const state = useContext(AppContext)
  const dispatch = useContext(DispatchContext)

  return (
    <div className='sidebar'>
      <input
        type='text'
        value={state.size}
        onChange={(e) =>
          dispatch({ type: 'changeSize', value: e.target.value })
        }
      />
      <input
        type='text'
        value={state.color}
        onChange={(e) =>
          dispatch({ type: 'changeColor', value: e.target.value })
        }
      />
      <button
        onClick={() => {
          dispatch({ type: 'changeColorAndSize', value: {size: 20, color: 'pink'} })
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  )
}

export default Sidebar
