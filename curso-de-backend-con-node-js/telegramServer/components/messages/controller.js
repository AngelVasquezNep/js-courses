const Logs = require('../../utils/logs');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            Logs.controller.error(
                'messages-addMessage',
                'Without user or message'
            );

            return reject({
                errorMessage: 'Missing data',
                error: 'Without user or message',
                status: 400
            });
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        };

        Logs.controller.info('message-addMessage', 'User created successfully');
        resolve(fullMessage);
    });
}

module.exports = {
    addMessage
};
