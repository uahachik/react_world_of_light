import React from 'react';
import house from "../layout/house.png";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

class House extends React.Component {
        constructor(props) {
            super(props);
            this.getElectricity = this.getElectricity.bind(this);
        }

    getElectricity() {
        if(this.props.electricity.includes(this.props.house.key)) {
                return {
                    backgroundColor: 'blue'
                }
        } else {
            return {
                backgroundColor: '#2e2e2e'
            }
        }
    };
    render() {
        return (
            <Animated animationIn="bounceInUp">
                <button
                    style={this.getElectricity()}
                    draggable
                    onDragStart={e=>this.props.onDragStart(e, this.props.house.key)}

                    onDragOver={e=>this.props.onDragOver(e)}
                    onDrop={e=>this.props.onDrop(e, this.props.house.key)}
                >
                    <img
                        src={house}
                        alt="I'm a Household!"
                        style={{width: '50px'}}
                    />
                </button>
            </Animated>
        );
    }
}

House.propTypes = {
    house: PropTypes.object.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
};

export default House;
