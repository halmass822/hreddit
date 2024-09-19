import { useEffect } from 'react';
import './App.css';
import LeftBar from './components/LeftBar';
import { fetchTopSubreddits } from './features/frontPageSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => { //load popular subreddits at app start
    dispatch(fetchTopSubreddits());
  }, [])

  return (
   <div id="hreddit">

      <LeftBar />

      
      <div id="hreddit_rightbar">

      </div>
    </div>
  );
}

export default App;
