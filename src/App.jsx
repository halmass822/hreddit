import { useEffect } from 'react';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import { fetchTopSubreddits, getPostsBySubreddit } from './features/frontPageSlice';
import { useDispatch } from 'react-redux';
import TopPanel from './components/Main Display/TopPanel';
import PostsList from './components/Main Display/PostsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => { //load popular subreddits at app start
    dispatch(fetchTopSubreddits());
    dispatch(getPostsBySubreddit(["popular",""]));
  }, [])

  return (
   <div id="hreddit">

      <LeftBar />

      
      <div id="hreddit_rightbar">
        <TopPanel />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
