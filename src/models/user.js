import * as usersService from '../services/example'

export default {

  namespace: 'user',

  state: {},

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
        console.log('aaa')
        dispatch({type: 'init', payload: {}})
      });
    }
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    * init({payload}, {call, put}) {
      console.log('init')
      // const {data} = yield call(usersService.fetch, {key: 'class'});
      const {data} = yield usersService.fetch({key: 'user'})
      console.log(data)
    }
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    }
  }

};
