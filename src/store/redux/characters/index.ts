import { Reducer } from 'redux';
import { CharAppState, CharTypes } from './types';

const INITIAL_STATE: CharAppState = {
  data: [{
    id: 'string',
    name: 'string',
    status: 'string',
    birthdate: 'string',
    bio: 'string',
    image: 'string',
  }],
  error: false,
  loading: false,
};

const reducer: Reducer<CharAppState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CharTypes.LOAD_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case CharTypes.LOAD_FAIL:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
