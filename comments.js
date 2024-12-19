// Create web server
// Create a web server that listens to incoming requests on port 3000
// It responds to the following requests:
// GET /comments - responds with a JSON string of all comments
// POST /comments - adds a new comment
// DELETE /comments - deletes all comments
// GET /comments/:id - responds with a JSON string of the comment with the specified id
// DELETE /comments/:id - deletes the comment with the specified id
// The comments are stored in a file called comments.json
// If the file does not exist, it should be created before adding comments
// If it does exist, it should be read and parsed before adding comments
// The comments should be stored as an array in the file
// Each comment should have the following structure:
// {
//   id: 1,