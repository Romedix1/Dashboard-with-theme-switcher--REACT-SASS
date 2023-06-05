import React, { useState }  from 'react';
import './styles/Main.scss';
import Nav from './components/nav';
import BiggerCardSection from './components/biggerCardSection';
import SmallerCardSection from './components/smallerCardSection';

function App() {
  const [theme, setTheme] = useState("light")

  const changeTheme = () => {
    setTheme(theme=="light" ? "dark" : "light")
  }

  return (
    <main className={theme}>
        <Nav onClick={changeTheme}/>
      <div className='container'>
        <BiggerCardSection />
        <SmallerCardSection />
      </div>
    </main>
  );
}

export default App;
