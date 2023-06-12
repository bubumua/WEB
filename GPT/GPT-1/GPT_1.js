const url_anwei = "https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json";
const url_gpt_v1 = 'https://v1.apigpt.cn/';
const url_gpt4_sealos_forefront = "https://rqdmrenzaeao.cloud.sealos.io/ask?model=forefront&prompt=";
const messagesContainer = document.querySelector('.messages');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');
function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') {
        return;
    }
    // create div for message to send
    const messageSendElement = document.createElement('div');
    messageSendElement.textContent = message;
    messageSendElement.classList.add('message', 'sent');
    messagesContainer.appendChild(messageSendElement);

    // create div for message to receive
    const messageReceiveElement = document.createElement('div');
    messageReceiveElement.classList.add('message', 'received');

    // generate url to send
    var question = $('#message-input').val();
    let url_send = url_gpt4_sealos_forefront + question;
    url_send = url_gpt_v1 + '?q=' + question + '&apitype=sql';

    // send and receive response
    $.getJSON(url_send, function (data) {
        messageReceiveElement.textContent = data.ChatGPT_Answer;
    });
    messagesContainer.appendChild(messageReceiveElement);

    messageInput.value = '';
    messageInput.focus();
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
