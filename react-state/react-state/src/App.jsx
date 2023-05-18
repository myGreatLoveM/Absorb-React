import { useState } from 'react'
import './App.css'

const App = () => {
  const [size, setSize] = useState(25)
  const [color, setColor] = useState('skyblue')
  const [likeCount, setLikeCount] = useState(0)

  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }

  const handleColorChange = (event) => {
    setColor(event.target.value)
  }

  const buttonHandler = () => {
    setSize(20)
    setColor('pink')
  }

  return (
    <div className='grid-parent'>
      <div className='header'>
        <h1>Welcome To Our App !!!</h1>
        <p>
          The current size is {size} and the current color is {color}.
        </p>
        <p>
          This page has been liked <strong>{likeCount}</strong> times.
        </p>
      </div>
      <div className='sidebar'>
        <input type='text' value={size} onChange={handleSizeChange} />
        <input type='text' value={color} onChange={handleColorChange} />
        <button onClick={buttonHandler}>Make the text 20px and pink</button>
      </div>
      <div className='main-area' style={{ color, fontSize: `${size}px` }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod
          obcaecati dolore debitis amet aut, excepturi voluptas ratione
          quibusdam laboriosam, optio pariatur provident doloremque consequatur
          animi? Consequuntur, officiis. Explicabo, vel.
        </p>
      </div>
      <footer className='footer'>
        <p>
          This is the footer.{' '}
          <button onClick={() => setSize(30)}>
            Make the text 30px but leave the color the same
          </button>
        </p>
        <p>
          <button onClick={() => setLikeCount((prevState) => prevState + 1)}>
            Like The Page
          </button>
        </p>
      </footer>
    </div>
  )
}

export default App
