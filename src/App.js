import './App.css';
import NoteState from './context/NoteState';
import Home from './components/Home';

function App() {
  return (
    <div>
     <NoteState>
      <Home/>
     </NoteState>  
    </div>
  );
}

export default App;
