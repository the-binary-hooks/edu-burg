// Send data to the client
export const sendResponse = (name, role, user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, name, role, token });
};
