const { render, screen } = require("@testing-library/react");
import { Provider } from "react-redux";
import store from "../../features/store.js";
import '@testing-library/jest-dom';
import LeftBar from "./LeftBar.jsx";

test('loads splash, input and subreddits', async () => {
    render(<Provider store={store}><LeftBar /></Provider>);
    
    const redditLogo = screen.getByRole('img', {name: "reddit logo"});
    const subredditSearch = screen.getByPlaceholderText(/Search Subreddits/i)
    const homeSubreddit = screen.getByText('r/Loading subreddits...');

    expect(redditLogo).toBeInTheDocument();
    expect(subredditSearch).toBeInTheDocument();
    expect(homeSubreddit).toBeInTheDocument();
});