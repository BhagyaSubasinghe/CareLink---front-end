import React, { useEffect, useRef, useState } from 'react';
import sendMessage from '../services/chatService';
import './ChatWidget.css';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I can help with appointments, doctors, and profiles.' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function handleSend(text) {
    if (!text) return;
    const userMsg = { from: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    try {
      const reply = await sendMessage(text);
      setMessages((m) => [...m, { from: 'bot', text: reply }]);
    } catch (e) {
      setMessages((m) => [...m, { from: 'bot', text: 'Sorry, something went wrong.' }]);
    } finally {
      setTyping(false);
    }
  }

  const suggestions = [
    'Book an appointment',
    'Find nearby doctors',
    'Show my profile',
  ];

  return (
    <div className={open ? 'chat-widget open' : 'chat-widget'}>
      <div className="chat-toggle" onClick={() => setOpen((s) => !s)} aria-hidden>
        <div className="chat-toggle-icon">{open ? '✕' : '💬'}</div>
      </div>

      <div className="chat-panel" role="dialog" aria-label="Chat assistant">
        <div className="chat-header">CareLink Assistant</div>
        <div className="chat-list" ref={listRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              <div className="chat-bubble">{m.text}</div>
            </div>
          ))}
          {typing && (
            <div className="chat-msg bot">
              <div className="chat-bubble typing">Typing...</div>
            </div>
          )}
        </div>

        <div className="chat-suggestions">
          {suggestions.map((s) => (
            <button
              key={s}
              className="chat-sug"
              onClick={() => handleSend(s)}
              type="button"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          className="chat-input-area"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input.trim());
          }}
        >
          <input
            aria-label="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input"
            placeholder="Ask me about appointments or doctors..."
          />
          <button className="chat-send" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
