import React, { Component } from 'react';
import './Main.css';
import { connect } from 'react-redux';
import WrapperPopover from './Popover';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    togglePopover = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };

    render() {
        const { hotspots, dispatch } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="main-container">
                <WrapperPopover isOpen={isOpen} togglePopover={() => this.togglePopover()}>
                    <button type="button" onClick={() => this.togglePopover()} className="btn new">
                        Create Hotspot
                    </button>
                </WrapperPopover>
                <div className="list-container">
                    <h2>List of hotspots</h2>
                    <ul>
                        {hotspots.map(hotspot => {
                            return (
                                <li key={hotspot.title}>
                                    {hotspot.title} - {hotspot.message}
                                    <button
                                        className="btn delete"
                                        onClick={() => dispatch({ type: 'deleteHotspot', hotspot })}
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(state => ({ hotspots: state.hotspots }))(Main);
