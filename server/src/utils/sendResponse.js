// Send data to the client
export const sendResponse = (addInfo, user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token, addInfo });
};