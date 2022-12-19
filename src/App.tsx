import React, { useEffect } from "react";
import "./App.css";
import icon from "constants/icons";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "redux/store.interface";
import { getAsyncOrg } from "redux/org";

function App() {
    const dispatch = useDispatch();
    const { orgs, page, totalItem } = useSelector((state: Store) => state.ORGS);

    useEffect(() => {
        dispatch(
            getAsyncOrg({
                page: 1,
                limit: 10,
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onMore = () => {
        dispatch(
            getAsyncOrg({
                page: page + 1,
                limit: 10,
            })
        );
    };
    console.log(orgs);

    return (
        <div className="App">
            <header className="App-header">
                <img src={icon.logoReact} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={onMore}>On More</button>
            </header>
        </div>
    );
}

export default App;
