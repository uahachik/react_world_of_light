import React, {Component} from 'react';
import PowerPlant from './PowerPlant'
import Power from './Power';
import Household from './Household';
import House from './House';
import connectDisconnectHouseholdToPowerplant from '../connectivity/connectionHhToPp';
import connectDisconnectHouseholdToHousehold from '../connectivity/connectionHhToHh';

class World extends Component {
    constructor(props) {
        super(props);
        this.state = {
            electricity: [],
            households: [],
            maxHousehold: 27,
            maxPowerPlant: 15,
            numHousehold: 20,
            numPowerPlant: 10,
            powerPlants: [],
        };
        this.createHousehold = this.createHousehold.bind(this);
        this.createPowerPlant = this.createPowerPlant.bind(this);
        this.connectivity = this.connectivity.bind(this);
        this.killRepairPowerPlant = this.killRepairPowerPlant.bind(this);
        this.householdHasElectricity = this.householdHasElectricity.bind(this);
    }

    createHousehold() {
        const newHousehold = {
            connect: [],
            hasConnectedToHH: false,
            hasElectricity: false,
            key: this.state.numHousehold,
            supply: []
        }
        if(this.state.numHousehold <= this.state.maxHousehold - 1) {
            this.setState({
                numHousehold: this.state.numHousehold + 1,
                households: [...this.state.households, newHousehold]
            });
        }
    }

    createPowerPlant() {
        const newPowerPlant = {
            ppConnect: [],
            isAlive: true,
            key: this.state.numPowerPlant,
            ppSupply: []
        }
        if(this.state.numPowerPlant <= this.state.maxPowerPlant - 1) {
            this.setState({
                numPowerPlant: this.state.numPowerPlant + 1,
                powerPlants: [...this.state.powerPlants, newPowerPlant],
            });
        }
    }

    killRepairPowerPlant(key) {
        const {powerPlants, households} = this.state;

        // powerPlants alive change
        this.setState({
            powerPlants: powerPlants.map(pp => {
                if(pp.key === key) {
                    // kill/repair power plant
                    pp.isAlive = !pp.isAlive;

                    if(pp.isAlive !== true) {
                        let sorted_arr = [];
                        let res = [];
                        powerPlants.forEach(item => {
                            sorted_arr = [...sorted_arr, ...item.ppConnect].sort();
                        });

                        // household has been connected more than to one powerPlant
                        for (let i = 0; i < sorted_arr.length - 1; i++) {
                            if (sorted_arr[i + 1] === sorted_arr[i]) {
                                res.push(sorted_arr[i]);
                            }
                        }

                        // household has been connected only to one powerPlant
                        const diff = sorted_arr.filter(item => res.includes(item) === false);

                        // check if powerPlants.ppConnect includes household to change "hasElectricity"
                        const inc = pp.ppConnect.filter(item => diff.includes(item));

                        // households "hasElectricity" change to false
                        households.forEach(i => {
                            if(inc.includes(i.key)) {
                                // console.log("HiHiHI");
                                i.hasElectricity = false;
                            }
                        });

                        // send households to the supply in order to connect after
                        pp.ppSupply = [...pp.ppConnect];
                        pp.ppConnect.length = 0;

                    } else if(pp.isAlive === true) {
                        // come back households to connect
                        pp.ppConnect = [...pp.ppSupply];
                        pp.ppSupply.length = 0;
                        // households "hasElectricity" change to true
                        households.forEach(i => {
                                if(pp.ppConnect.includes(i.key)) {
                                    i.hasElectricity = true;
                                }
                            }
                        )
                    }
                }
                return pp;
            })
        });

        // update "electicity" after alive has been changed
        this.householdHasElectricity(powerPlants, households);
    }



    // -------------------------------- Drag & Drop Section -------------------------------- //
    onDragStart(ev, id) {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver(ev) {
        ev.preventDefault();
    }

    connectivity(ev, targetID) {
        const dropID = ev.dataTransfer.getData("id");
        const {powerPlants, households} = this.state;

        // connect/disconnect household to powerPlant
        connectDisconnectHouseholdToPowerplant(
            dropID,
            targetID,
            powerPlants,
            households
        );

        // connect/disconnect household to household
        connectDisconnectHouseholdToHousehold(
            dropID,
            targetID,
            households
        );
        // ----------------------------------------------------------------------------------- //

        // update "electicity" after Drag & Drop
        this.householdHasElectricity(powerPlants, households);
    }

    householdHasElectricity(powerPlants, households) {
        let newElectricity = [];
        powerPlants.forEach(item => {
            newElectricity = [...newElectricity, ...item.ppConnect];
        });
        this.setState({electricity: newElectricity});

        households.forEach(hh => {
            if(hh.hasElectricity === true) {
                if(hh.supply.length !== 0) {
                    hh.connect = [...hh.supply];
                    hh.supply.length = 0;
                }
            } else {
                if(hh.connect.length !== 0) {
                    hh.supply = [...hh.connect];
                    hh.connect.length = 0;
                }
            }
            newElectricity = [...newElectricity, ...hh.connect];
        });
        this.setState({electricity: newElectricity});
    }

    render() {
        const houses = [];
        for (let i = 0; i < this.state.numHousehold - 20; i ++) {
            houses.push(
                <House
                    key={i}
                    house={this.state.households[i]}
                    electricity={this.state.electricity}
                    onDragStart={this.onDragStart}
                    onDragOver={this.onDragOver}
                    onDrop={this.connectivity}
                />
            );
        }

        const plants = [];
        for (let i = 0; i < this.state.numPowerPlant - 10; i ++) {
            plants.push(
                <Power
                    key={i}
                    power={this.state.powerPlants[i]}
                    onClickHandler={this.killRepairPowerPlant}
                    onDragOver={this.onDragOver}
                    onDrop={this.connectivity}
                />
            );
        }

        return (
                <div className="World-Container">
                    <Household onHousehold={this.createHousehold}>
                        {houses}
                    </Household>
                    <PowerPlant onPowerPlant={this.createPowerPlant}>
                        {plants}
                    </PowerPlant>
                </div>
        );
    }
}
export default World;
