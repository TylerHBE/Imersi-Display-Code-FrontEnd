function joinGame (socket, email, token, gameKey) {
    const authObject = {
        email: email,
        gameKey: gameKey,
        token: token
    };

    socket.emit("joinGame", authObject)
}

module.exports = joinGame