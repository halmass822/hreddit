import { useEffect } from 'react';
import './App.css';
import LeftBar from './components/LeftBar';
import { fetchTopSubreddits, getPostsBySubreddit } from './features/frontPageSlice';
import { useDispatch } from 'react-redux';
import TopPanel from './components/TopPanel';

function App() {
  const dispatch = useDispatch();

  useEffect(() => { //load popular subreddits at app start
    dispatch(fetchTopSubreddits());
    dispatch(getPostsBySubreddit("popular"));
  }, [])

  return (
   <div id="hreddit">

      <LeftBar />

      
      <div id="hreddit_rightbar">
        <TopPanel />
      </div>
    </div>
  );
}

export default App;
