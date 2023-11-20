import axios from 'axios';
import 'dotenv/config';

const webhookId = process.env.WEBHOOK_ID;
const webhookToken = process.env.WEBHOOK_TOKEN;
const roleId = process.env.ROLE_ID;

const url = new URL(
  `https://discord.com/api/webhooks/${webhookId}/${webhookToken}`
);
if (new Date().getDate() == 31) {
  `Watching Special Episode}`;
} else {
  `Watching episode ${new Date().getDate() - 5}`;
}

const date = new Date().getDate();
const episode =
  date === 31 ? 'Watching Special Episode' : `Watching episode ${date - 5}`;

const body = {
  content: `<@&${roleId}> starting in 10 mins.\n${episode}`
};

axios.post(url, body);
