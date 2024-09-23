const { render, screen } = require("@testing-library/react");
import { Provider } from "react-redux";
import store from "../../features/store.js";
import '@testing-library/jest-dom';
import TopPanel from "./TopPanel.jsx";

test('loads top bar', async () => {
    render(<Provider store={store}><TopPanel /></Provider>);

    const hotButton = screen.getByText('Hot');
    const newButton = screen.getByText('New');
    const topButton = screen.getByText('Top');
    const risingButton = screen.getByText('Rising');

    expect(hotButton).toBeInTheDocument();
    expect(newButton).toBeInTheDocument();
    expect(topButton).toBeInTheDocument();
    expect(risingButton).toBeInTheDocument();
});