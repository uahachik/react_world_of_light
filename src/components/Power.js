import React from 'react';
import saving from "../layout/saving.png";
import buildings from "../layout/buildings.svg";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";


class Power extends React.Component {
    constructor(props) {
        super(props);
        this.getKilledColor = this.getKilledColor.bind(this);
        this.getKilledImage = this.getKilledImage.bind(this);
    }

    getKilledColor() {
      if(this.props.power.isAlive) {
          return {
              backgroundColor: 'blue'
          }
      } else {
          return {
              backgroundColor: '#2e2e2e'
          }
      }
    };

    getKilledImage() {
        if(this.props.power.isAlive) {
            return (
                <img
                    src={saving}
                    alt="I'm an alive PowerPlant!"
                    style={{width: '50px'}}
                />
            );
        } else {
            return (
                <img
                    src={buildings}
                    alt="I'm a killed PowerPlant!"
                    style={{width: '50px'}}
                />
            );
        }
    };
    render() {
        return (
            <Animated animationIn="bounceInUp">
                <button
                    onClick={this.props.onClickHandler.bind(this, this.props.power.key)}
                    style={this.getKilledColor()}
                    onDragOver={e=>this.props.onDragOver(e)}
                    onDrop={e=>this.props.onDrop(e, this.props.power.key)}
                >
                    {this.getKilledImage()}
                </button>
            </Animated>
        );
    }
}

Power.propTypes = {
    power: PropTypes.object.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
};

export default Power;
