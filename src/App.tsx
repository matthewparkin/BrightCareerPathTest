import { useState } from 'react';
import './App.css';
import { CardsTab } from './components/CardsTab';
import { TestWindow } from './components/TestWindow';

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        Banner image
        <h1>Career Path Test</h1>
        <p>Sub Heading</p>
      </header>
      <CardsTab />
      <p className="test-details">
        We've analysed data from thousands of our members who work in graduate roles across a range of sectors to understand which personalities, skills and values best fit each career path.
        Take this test to understand what career path you might be suited to and how to get started.
      </p>

      <TestWindow />
      <footer>
        <p>Footer</p>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App
