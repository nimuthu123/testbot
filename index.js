
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

const client = new Client({
    authStrategy: new LocalAuth(),  // Use local auth strategy to persist session
});

// Generate QR code for WhatsApp Web login
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// When WhatsApp Web is ready
client.on('ready', () => {
    console.log('Client is ready!');
});

// When receiving a message
client.on('message', async (message) => {
    // Only respond to text messages
    if (message.body) {
      const response = await replybot(message.body)
        message.reply(response);
    }
    if (message.body === '!send-media') {
   
       
   
        
    }

});

async function replybot(userMessage) {

}


// Start WhatsApp client
client.initialize();

