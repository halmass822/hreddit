import { useEffect } from 'react';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import { fetchTopSubreddits, getPostsBySubreddit } from './features/frontPageSlice';
import { useDispatch } from 'react-redux';
import TopPanel from './components/MainDisplay/TopPanel';
import PostsList from './components/MainDisplay/PostsList';
import Modal from './components/Modal/Modal';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => { //load popular subreddits at app start
    dispatch(fetchTopSubreddits());
    dispatch(getPostsBySubreddit(["popular",""]));
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" element={<PostsList />}
        errorElement={<PostsList />}>
      </Route>
    )
  )

  return (
   <div id="hreddit">
      <Modal />

      <LeftBar />

      
      <div id="hreddit_rightbar">
        <TopPanel />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
