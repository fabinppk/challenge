import React, { Component } from 'react';
import './Popover.css';
import { connect } from 'react-redux';
import Popover from 'react-popover';

class WrapperPopover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferPlace: null,
            place: null,
            inputTitleValue: '',
            inputMessageValue: ''
        };
    }

    togglePopover = () => {
        const { togglePopover, dispatch } = this.props;
        dispatch({ type: 'toggleClicked' });
        document.querySelector('.elementHover').classList.remove('elementHover');
        togglePopover();
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    newHotspot = (title, message) => {
        const hotspot = {
            coordx: this.props.x,
            coordy: this.props.y,
            message,
            title
        };

        this.togglePopover();
        this.setState({ inputTitleValue: '' });
        this.setState({ inputMessageValue: '' });

        if (!title || !message) {
            return {
                type: '',
                payload: null
            };
        }

        return {
            type: 'newHotspot',
            hotspot
        };
    };

    popoverBody = () => {
        const { inputTitleValue, inputMessageValue } = this.state;
        const { dispatch } = this.props;
        return (
            <div key="a">
                <form>
                    <input
                        name="inputTitleValue"
                        onChange={e => this.handleInputChange(e)}
                        type="text"
                        value={inputTitleValue}
                        placeholder="Type Title"
                    />
                    <input
                        name="inputMessageValue"
                        onChange={e => this.handleInputChange(e)}
                        type="text"
                        value={inputMessageValue}
                        placeholder="Type Message"
                    />
                    <button
                        onClick={() =>
                            dispatch(this.newHotspot(inputTitleValue, inputMessageValue))
                        }
                        type="submit"
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    };

    render() {
        const { children, isOpen } = this.props;

        const popoverProps = {
            isOpen,
            preferPlace: this.state.preferPlace,
            place: this.state.place,
            onOuterAction: () => this.togglePopover(),
            body: [this.popoverBody()]
        };

        return <Popover {...popoverProps}>{children}</Popover>;
    }
}

export default connect(state => ({ hotspots: state.hotspots }))(WrapperPopover);
