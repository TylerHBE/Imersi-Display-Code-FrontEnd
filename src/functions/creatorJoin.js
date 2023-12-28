function creatorJoin (socket, email, token, gameKey) {
    const authObject = {
        email: email,
        gameKey: gameKey,
        token: token
    };

    socket.emit("creatorJoin", authObject)}

module.exports = creatorJoin