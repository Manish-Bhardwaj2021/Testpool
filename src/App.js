import React from 'react';
import './App.css';
import './css/all.min.css';
import AsideBar from './components/menu/Asidebar';
import MainSection from './components/main/MainSection';

function App() {
  return (
    <div className="App d-flex">
      <AsideBar />
      <MainSection/>
    </div>
  );
}

export default App;
