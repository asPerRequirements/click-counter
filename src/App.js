
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';

const getOrCreate = () => {
  const storedValue = localStorage.getItem("count-react");
  if (storedValue !== null) {
    return parseInt(storedValue);
  } else {
    localStorage.setItem("count-react", 0);
    return 0;
  }
};

function App() {

  const [count, setCount] = useState(0);
  const [showCooie, setShowCookie] = useState(false);

  const updateCount = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
    
    if (updatedCount % 30 === 0 && updatedCount >= 30) {
      setShowCookie(true);
    }
  
    localStorage.setItem("count-react", updatedCount.toString());
  };

  useEffect(() => {
    let initial = getOrCreate();
    setCount(initial);
  }, [])



  return (
    <>
      <div className="container">
        <div className="app">
          <div className='app--number'>
            <h1>{count}</h1>
          </div>
          <button className='btn' onClick={updateCount}>
            + Increment
          </button>
        </div>
      </div>
      <Footer showCooie={showCooie} count={count} setCount={setCount} setShowCookie={setShowCookie} />
    </>
  );
}

export default App;
