import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './Organisms';
import { LoginPage, TodoPage } from './Pages';

// LoginPage used as Home page
function App() {
  return (
    <>
      <div className="App">
      <Header />
        <>
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/todo" element={<TodoPage />}/>
          </Routes>
        </>
        <Footer />
      </div>
    </>
  );
}

export default App;
