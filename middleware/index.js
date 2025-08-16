import fs from "fs";
function logReqres(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `${req.method} ${req.url} ${new Date().toISOString()}\n`,
      (err) => {
        next();
      }
    );
  };
}

export default logReqres;