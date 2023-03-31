import React from 'react';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";


const WhatsApp = () => {
    return (
        <div>

            <WhatsAppWidget
                phoneNo="17138223022"
                position="right"
                widgetWidth="300px"
                widgetWidthMobile="260px"
                autoOpen={false}
                autoOpenTimer={5000}
                messageBox={true}
                messageBoxTxt="Hi Team, is there any related service available ?"
                iconSize="80"
                iconColor="white"
                iconBgColor="#25D366"
                headerIcon=""
                headerIconColor="pink"
                headerTxtColor="black"
                headerBgColor="#075E54"
                headerTitle="LM-Tile"
                headerCaption="Online"
                bodyBgColor="#bbb"
                chatPersonName="Support"
                chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
                footerBgColor="#999"
                placeholder="Type a message.."
                btnBgColor="yellow"
                btnTxt="Start Chat"
                btnTxtColor="black"
            >
            </WhatsAppWidget>

        </div>
    );
};

export default WhatsApp;