const send_btn = document.querySelector('#send_btn');
const msg=document.querySelector('#message');
let display_sent_msg=document.querySelector('#container_sent_msg');
const encoded_msg=null;

const encode_message = (string) =>{
    encoded_msg = btoa(string);
    display_encode_msg(encoded_msg);
    
}


const display_encode_msg = (msg) =>{
    display_sent_msg.innerHTML = '';
    display_sent_msg.innerHTML = msg;
    decode_message(msg);
}

send_btn.addEventListener('click',encode_message);
