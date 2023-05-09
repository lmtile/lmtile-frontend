import { useEffect } from 'react';

function RoomvoAssistant() {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.id = 'roomvoAssistant';
        script.type = 'text/javascript';
        script.dataset.locale = 'en-us';
        script.dataset.position = 'bottom-left';
        script.src = "https://www.roomvo.com/static/scripts/b2b/common/assistant.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}

export default RoomvoAssistant;

