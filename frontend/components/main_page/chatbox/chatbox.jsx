import React from 'react';
import ChatboxHeader from './chatbox_header';
import MessageFormContainer from './message_form_container';

const Chatbox = () => (
  <div className="chatbox">
    <ChatboxHeader/>
    {/* <MessageIndexContainer> */}
    
    <p>I</p>
    <p>am</p>
    <p>THE</p>
    <p>chatbox</p>
    <MessageFormContainer/>
  </div>
)

export default Chatbox;