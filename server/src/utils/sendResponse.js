// Send data to the client
// Only use for instance of models that has the getSignedToken() method
export const sendResponse = (addInfo, user, statusCode, res) => {
    console.log("sendResponse", { addInfo, user, statusCode, res });
    console.log(true);
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token, addInfo });
};
