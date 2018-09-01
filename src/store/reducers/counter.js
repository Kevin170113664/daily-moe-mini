import {handleActions} from 'redux-actions'

const TYPE = {
  INCREMENT: 'INCREMENT'
};

const initState = {
  num: 0,
};

export default handleActions({
  [TYPE.INCREMENT](state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
}, initState)
