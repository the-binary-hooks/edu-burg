// Check if the user is properly authenticated
export const getPrivateData = (req, res) => {
    res.status(200).json({
        success: true,
        data: "You got access to the private route",
    });
};
