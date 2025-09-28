import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

export default function ConversationalAI() {
  const agentId = 'agent_4701k4yzmc33f3btgvvfvcszxwsa';

  useEffect(() => {
    // Ensure the script is loaded before rendering the widget
    const checkScriptLoaded = () => {
      if (window.customElements && window.customElements.get('elevenlabs-convai')) {
        return true;
      }
      return false;
    };

    const interval = setInterval(() => {
      if (checkScriptLoaded()) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <elevenlabs-convai 
      agent-id={agentId}
      data-testid="conversational-ai-widget"
    />
  );
}