import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import Home from './pages/Home';
import AddCard from './pages/AddCard'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <main>  
        <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/add-card" element={<AddCard />} />
            <Route path="/*" element={<Home />} /> 
          </Routes>
        </main>
      </Router>
    </Provider>
  )
}

export default App

