import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import channelMembersReducer from './channel_members_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  channelMembers: channelMembersReducer
});

export default entitiesReducer;