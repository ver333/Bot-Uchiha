import axios from "axios";

export async function sendMessage(to: string, text: string) {
  const token = process.env.CLOUD_TOKEN;
  const phoneId = process.env.PHONE_NUMBER_ID;

  try {
    await axios.post(
      `https://graph.facebook.com/v21.0/${phoneId}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        text: { body: text }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (err) {
    console.error("Erro ao enviar mensagem:", err.response?.data || err);
  }
} www
