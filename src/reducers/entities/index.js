import * as Immutable from 'immutable';
import * as actionTypes from '../../constants/actionTypes';

const entities = (state = Immutable.fromJS({ users: {}, events: {} }), action) => {
  switch (action.type) {
    case actionTypes.LOAD_ENTITIES_SUCCESS:
      return action.payload;
    case actionTypes.MERGE_ENTITIES:
      return state.merge(action.payload);
    case actionTypes.LOAD_ENTITIES_ERROR:
    case actionTypes.LOGOUT:
      return Immutable.fromJS({ users: {}, events: {} });
    default:
      return state;
  }
};

export default entities;