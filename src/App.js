
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';

const getOrCreate = () => {
  if (localStorage.getItem("count-react")) {
    let num = parseInt(localStorage.getItem("count-react"));
    return num + 1;
  } else if (!localStorage.getItem("count-react")) {
    localStorage.setItem("count-react", 1);
    return 1;
  }
}

function App() {

  const [count, setCount] = useState(0);
  const [showCooie, setShowCookie] = useState(false);

  const updateCount = () => {
    setCount(count + 1);
    if (count % 30 == 0) {
      setShowCookie(true);
    }
    if (localStorage.getItem("count-react")) {
      localStorage.setItem("count-react", count);
    }
  }

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
            +1
          </button>
        </div>
      </div>
      <Footer showCooie={showCooie} count={count} setCount={setCount} setShowCookie={setShowCookie} />
    </>
  );
}

export default App;
