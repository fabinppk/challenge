import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import WrapperPopover from '../Popover';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: true
        };
    }

    canGetCoords = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'canGetCoords' });
    };

    togglePopover = () => {
        const { isOpen } = this.state;
        const { dispatch } = this.props;
        this.setState({ isOpen });
        dispatch({ type: 'canGetCoords' });
    };

    render() {
        const { hotspots, dispatch, globalState } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="main-container">
                <button type="button" onClick={() => this.canGetCoords()} className="btn new">
                    Create Hotspot
                </button>
                {globalState.clicked && (
                    <WrapperPopover
                        isOpen={isOpen}
                        x={globalState.coordx}
                        y={globalState.coordy}
                        togglePopover={() => this.togglePopover()}
                    >
                        <div
                            className="ball"
                            style={{
                                top: `${globalState.coordy}px`,
                                left: `${globalState.coordx}px`
                            }}
                        />
                    </WrapperPopover>
                )}
                <div className="list-container">
                    <h2>List of hotspots</h2>
                    <ul>
                        {hotspots.map(hotspot => {
                            return (
                                <li key={hotspot.title}>
                                    {hotspot.title}
                                    <button
                                        className="btn delete"
                                        onClick={() => dispatch({ type: 'deleteHotspot', hotspot })}
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                    <div
                                        className="ball"
                                        style={{
                                            top: `${hotspot.coordy}px`,
                                            left: `${hotspot.coordx}px`
                                        }}
                                    >
                                        <div className="message-container">
                                            <p className="title">{hotspot.title}</p>
                                            <p className="message">{hotspot.message}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(state => ({ hotspots: state.hotspots, globalState: state.globalState }))(
    Main
);
