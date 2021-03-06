import React, { Component } from 'react';
import './App.css';
import YesNoSelector from './components/YesNoSelector';
import logo from './checkbox-checked.svg';

class App extends Component {
  render() {
    return (
      <div className="blue-theme">
        <section className="card">
            <h1 className="question"><span>Ливерпуль выграл свой матч 06.11.2018?</span></h1>
            <form className="answers">
                {/* <button ><img src={logo} className="fab" alt="logo" /></button> */}
                <img src={logo} className="fab" alt="logo" />
                <YesNoSelector />
            </form>
        </section>
      </div>
    );
  }
}

export default App;
