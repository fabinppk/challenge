import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <button type="button" className="btn new">
                Create Hotspot
            </button>
            <div className="list-container">
                <h2>List of hotspots</h2>
                <ul>
                    <li>
                        Hotspot 1
                        <button className="btn delete" type="button">
                            Delete
                        </button>
                    </li>
                    <li>
                        Hotspot 2
                        <button className="btn delete" type="button">
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Main;
