import * as DirectAPIUtil from '../util/direct_api_util';

export const RECEIVE_ALL_DIRECTS = 'RECEIVE_ALL_DIRECTS';
export const RECEIVE_DIRECT = 'RECEIVE_DIRECT';

export const fetchDirects = teamId => dispatch => (
  DirectAPIUtil.fetchDirects(teamId)
               .then(directs => dispatch(receiveAllDirects(directs)))
)

export const fetchDirect = directId => dispatch => (
  DirectAPIUtil.fetchDirect(directId)
               .then( payload => dispatch(receiveDirect(payload)))
)

export const createDirect = directForm => dispatch => (
  DirectAPIUtil.createDirect(directForm)
               .then( payload => dispatch(receiveDirect(payload)))
)

export const updateDirect = directForm => dispatch => (
  DirectApiUtil.createDirect(directForm)
               .then( payload => dispatch(receiveDirect(payload)))
)

const receiveAllDirects = directs => ({
  type: RECEIVE_ALL_DIRECTS,
  directs
})

const receiveDirect = payload => ({
  type: RECEIVE_DIRECT,
  payload
})