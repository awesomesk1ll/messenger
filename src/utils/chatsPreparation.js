export const prepareChat = chat => {
    const messages = chat.messages.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    const lastMessage = messages[messages.length - 1]; // ISODateString | undefined
    const newMessagesCount = messages.filter(message => message.new).length;

    return {
        ...chat,
        chatId: chat.id,
        messages,
        lastMessage,
        newMessagesCount,
    };
};

export const prepareAllChats = chats => chats
    .map(prepareChat) // сортируем сообщения, докидываем колво новых сообщений и последнее сообщение
    .sort((a, b) => new Date(b.lastMessage?.dateTime || 0) - new Date(a.lastMessage?.dateTime || 0)); // сортируем по последнему сообщению
