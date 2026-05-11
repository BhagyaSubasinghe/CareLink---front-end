async function sendMessage(message) {
  const apiUrl = process.env.REACT_APP_CHAT_API_URL;
  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      return data.reply || 'I could not parse the response.';
    } catch (e) {
      console.error('chatService error', e);
      return 'Sorry, the chat service is unavailable.';
    }
  }

  // Mock reply with small variations
  await new Promise((r) => setTimeout(r, 700 + Math.random() * 700));
  const lower = message.toLowerCase();
  if (lower.includes('book')) return 'Sure — what date and time would you like to book?' ;
  if (lower.includes('doctor') || lower.includes('doctors')) return 'I can show nearby doctors or filter by specialty. Which do you prefer?';
  if (lower.includes('profile') || lower.includes('my profile')) return 'Opening your profile — you can update contact info there.';
  return "Thanks — I can help with appointments, doctors, and profile tasks. Try 'Book an appointment'.";
}

export default sendMessage;
