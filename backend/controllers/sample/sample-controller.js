const addSample = async (request, response, next) => {
    console.log("Successfully added sample.");
    return response.json({ message: "Successfully added sample." });
}

module.exports = {
    addSample
}