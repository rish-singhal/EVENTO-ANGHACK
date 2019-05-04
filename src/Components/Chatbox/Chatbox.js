import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import React, { Component } from 'react';
import './Chatbox.css';


export default class Chatbox extends Component {

    messageHandler = (message) => {
        console.log(":kshdjsd");
        fetch('https://ibm-watdad.herokuapp.com/ask, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                question: message
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                addResponseMessage(data.answer);
            })
    }
    componentDidMount() {
        addResponseMessage('Hello, there! Ask me anything. :)')
    }
    render() {
        return (
            <Widget
                handleNewUserMessage={this.messageHandler}
                senderPlaceHolder='Have a question?'
                title="Lexie"
                subtitle="I can answer your questions"
            />
        );
    }


}