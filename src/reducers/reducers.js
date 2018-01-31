import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import ProjectsReducer from './ProjectsReducer';

export default combineReducers({
  routing: routerReducer,
  // projects: ProjectsReducer,
});
