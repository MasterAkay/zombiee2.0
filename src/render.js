import state from './state/state';

export default render(state) {
    switch(state.currentView) {
        case('dashboard') {
            header(state);
            carousel(state);
            searchBar(state);
            restaurantContainer(state);
        }
    }
}
