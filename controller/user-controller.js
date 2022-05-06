const authenticate = async (req, res, next) => {
    // Authentication middleware
    //req.authorizedUser = {};
    
    // Parsing login and password from headers
    const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
    const [dUsername, dPassword] = b64auth === "" ? [,] : Buffer.from(b64auth, "base64")
      .toString()
      .split(":");
    try {
        ///

            // Some DB interaction with User.findOne()

        ///
      if (dUsername !== undefined && dPassword !== undefined) {
        req.authorizedUser = {
            user: dUsername,
            pass: dPassword
        }
      }
        console.log("User:" + dUsername);
        console.log("Password:" + dPassword);
  
        return next();
      
    } catch (e) {
      res.status(403).send("Authorization error.");
      return;
    }
  
    res.status(403).send("Not authorized.");
  };

  module.exports = {
    authenticate,
};