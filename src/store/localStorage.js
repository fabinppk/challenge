export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                hotspots: [],
                globalState: {
                    clicked: false,
                    canGetCoords: false,
                    coordx: null,
                    coordy: null
                }
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
};
