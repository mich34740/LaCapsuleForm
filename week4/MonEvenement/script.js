#!/usr/bin/env node 

const myEvent = new CustomEvent('newMessage', {

    detail: {
        sender : 'Michel',
        message: 'Salut ça va ?'
    },
    bubbles: true,
    cancelable: true
});
document.addEventListener('newMessage', function(event) {
    console.log('Expéditeur:', event.detail.sender);
    console.log('Message:', event.detail.message);
});

const buttonMessage = document.getElementById('addNewMessBtn');

buttonMessage.addEventListener("click", () => {
    const textSend = document.getElementById('sendInput');
    const textMess = document.getElementById('messageInput');
    const myEvent = new CustomEvent('newMessage', {
        detail: {
            sender: textSend.value,
            message: textMess.value
        },
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(myEvent);
});
const myEventSU = new CustomEvent('newSU', {

    detail: {
        version : 'xxxxxx',
        importance: 5
    },
    bubbles: true,
    cancelable: true
});
document.addEventListener('newSU', function(event) {
    console.log('Mise à jour système' );
    console.log('Version: ' , event.detail.Version );
    console.log('Importance: ', event.detail.importance );
});
function sendSysUpdate (Version, importance) {
    const event = new CustomEvent('newSU', {
        detail: {Version, importance},
        bubbles: true
    });
    document.dispatchEvent(event);
}
sendSysUpdate('1.2.3.5', 'low');
