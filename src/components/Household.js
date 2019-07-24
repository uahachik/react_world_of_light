import React from 'react';

const Household = (props) => {
    return (
        <div className="World-Component">
            <button
                onClick={props.onHousehold}
                style={{width:'150px',height:'40px',marginTop:'20px'}}
            >
                Create Household
            </button>
            <span className="Rules HouseholdRules">
                Any number of Households can be connected to any number of Power Plants
                which are Alive (drag & drop from Household to Power Plant),
                or to any number of other Households
                which have been connected to Power Plant
                (drag & drop from Household to another Household).
            </span>
            <React.Fragment>{props.children}</React.Fragment>
        </div>
    )
}

export default Household;