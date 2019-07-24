function connectionHhToPp(dropID, targetID, powerPlants, households) {
    for(const pp of powerPlants) {
        if (pp.key === Number(targetID) && targetID < 19 && pp.isAlive === true) {
            const {ppConnect} = pp;
            // create a "ppConnect" household's array for every powerplant
            if (ppConnect.includes(Number(dropID)) !== true) {
                // add household to the array
                ppConnect.push(Number(dropID));
                // household "hasElectricity" be true
                households.forEach(item => {
                    if (item.key === Number(dropID)) {
                        item.hasElectricity = true;
                    }
                });
            } else {
                const countOfHasElectricity = powerPlants.reduce((count, i) => {
                    return i.ppConnect.includes(Number(dropID)) ? count += 1 : count;
                }, 0);
                // if household has been connected only to one powerPlant, it's "hasElectricity" be false
                if(countOfHasElectricity === 1) {
                    households.forEach(item => {
                        if(item.key === Number(dropID)) {
                            item.hasElectricity = false;
                        }
                    });
                }
                // remove household from the array
                pp.ppConnect = ppConnect.filter(item => item !== Number(dropID));
            }
        }
    }
}

export default connectionHhToPp;
