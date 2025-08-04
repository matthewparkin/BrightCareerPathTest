import './App.scss';
import { CardsTab } from './components/CardsTab';
import { TestWindow } from './components/TestWindow';

const App = () => {
  console.log("App component rendered");
  return (
    <>
      <header className="app-header">
        <div className="app-header__title">
          <h1>Career Path Test</h1>
          <p>Discover careers that match your skills and personality</p>
        </div>
      </header>
      <CardsTab />
      <p className="test-details">
        We've analysed data from thousands of our members who work in graduate roles across a range of sectors to understand which personalities, skills and values best fit each career path.
        Take this test to understand what career path you might be suited to and how to get started.
      </p>

      <TestWindow />
    </>
  )
}

export default App
