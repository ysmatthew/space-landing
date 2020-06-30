import React from "react";
import style from './scss/modules/app.module.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  return (
    <div className={style.container}>
      <Header />
        <Main />
      <Footer />
    </div>
  );
}

export default App;
