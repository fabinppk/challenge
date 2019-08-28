import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../Main';
import Header from '../Header';
import './index.css';

class Content extends Component {
    onMouseMove(e) {
        const { globalState, dispatch } = this.props;
        const { clicked, canGetCoords } = globalState;
        const elem = document.querySelectorAll('.elementHover');

        if (canGetCoords) {
            if (clicked) {
                return false;
            }
            [...elem].forEach(el => {
                el.classList.remove('elementHover');
            });

            e.target.classList.add('elementHover');
            return dispatch({
                type: 'setCoords',
                payload: { coordx: e.clientX - 12, coordy: e.clientY - 12 }
            });
        }
        return false;
    }

    handleClick = () => {
        const { globalState, dispatch } = this.props;
        const { clicked, canGetCoords } = globalState;
        if (canGetCoords) {
            if (clicked) {
                return false;
            }
            return dispatch({ type: 'toggleClicked' });
        }
        return false;
    };

    render() {
        return (
            <div
                className="mouseMove"
                onClick={() => this.handleClick()}
                onMouseMove={this.onMouseMove.bind(this)}
            >
                <Header />
                <Main />
            </div>
        );
    }
}

export default connect(state => ({ globalState: state.globalState }))(Content);
