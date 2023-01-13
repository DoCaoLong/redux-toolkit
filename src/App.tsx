import React, { useEffect } from "react";
import "./App.css";
import icon from "constants/icons";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "redux/store.interface";
import { getAsyncOrg } from "redux/org";
import { decrease, increase } from "redux/counter";

function App() {
    const dispatch = useDispatch();
    const { orgs, page, totalItem } = useSelector(
        (state: IStore) => state.ORGS
    );
    const count = useSelector((state: IStore) => state.COUNTER);

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

    const handleIncrease = () => {
        dispatch(increase());
    };
    const handleDecrease = () => {
        dispatch(decrease());
    };

    return (
        <div className="App">
            <button onClick={onMore}>On More</button>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button disabled={count <= 0} onClick={() => handleDecrease()}>
                    -
                </button>
                <button>Couter: {count}</button>
                <button onClick={() => handleIncrease()}>+</button>
            </div>
        </div>
    );
}

export default App;
