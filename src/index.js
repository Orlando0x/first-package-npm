const messages = [
    'oscar',
    'jose',
    'orlando',
    'caroline',
    'javier',
    'laura',
    'maria'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };