import React from 'react';

const PowerPlant = (props) => {
    return (
        <div className="World-Component">
            <button
                onClick={props.onPowerPlant}
                style={{width:'150px',height:'40px',marginTop:'20px'}}
            >
                Create Power Plant
            </button>
            <span className="Rules PowerPlantsRules">
                Each Power Plant is Alive by default but can be killed
                and repaired after (click Power Plant).
                Power plant which is not Alive doesn't generate any electricity,
                but all connectivities still remain.
            </span>
            <React.Fragment>{props.children}</React.Fragment>
        </div>
    )
}

export default PowerPlant;