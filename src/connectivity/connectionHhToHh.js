function connectionHhToHh(dropID, targetID, households) {
    /*households.forEach(hh => {
        const {connect} = hh;
        if (hh.key === Number(targetID) && targetID > 19 && hh.hasElectricity === true) {
            if (connect.includes(Number(dropID)) !== true) {
                // add household
                hh.connect.push(Number(dropID));
                households.forEach(item => {
                    if(item.key === Number(dropID)) {
                        item.hasConnectedToHH = true;
                    }
                });
            } else {
                // remove household
                hh.connect = connect.filter(item => item !== Number(dropID));
                households.forEach(item => {
                    if(item.key === Number(dropID)) {
                        item.hasConnectedToHH = false;
                    }
                });
            }
        }
    });*/
    // households.forEach(hh => {
    for(const hh of households) {
        const {connect} = hh;
        if (hh.key === Number(targetID) && targetID > 19 && hh.hasElectricity === true) {
            if (connect.includes(Number(dropID)) !== true) {
                // add household
                hh.connect.push(Number(dropID));
                households.forEach(item => {
                    if(item.key === Number(dropID)) {
                        item.hasConnectedToHH = true;
                    }
                });
            } else {
                // remove household
                hh.connect = connect.filter(item => item !== Number(dropID));
                households.forEach(item => {
                    if(item.key === Number(dropID)) {
                        item.hasConnectedToHH = false;
                    }
                });
            }
        }
    }
}

export default connectionHhToHh;
