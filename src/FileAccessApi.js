window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
export const savefile = (fileName, json, callback) => {
  window.requestFileSystem(
    window.TEMPORARY,
    50 * 1024 * 1024,
    initFS.bind(null, fileName, json, callback),
    errorHandler
  );
};
const initFS = (fs, fileName, data = null, callback = null) => {
  const retVal = null;
  fs.root.getFile(
    fileName,
    { create: false, exclusive: true },
    (fileEntry) => {
      fileEntry.file(function (file) {
        prom = new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onloadend = function (e) {
            resolve(e.result);
          };
          reader.readAsText(file);
        });
        retVal = JSON.parse(Promise.all([prom]));
      }, errorHandler);
      if (data) {
        retVal = [...retVal, data];
        fileEntry.createWriter((fileWriter) => {
          window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder;
          fileWriter.write(JSON.stringify(retVal));
        }, errorHandler);
      }
    },
    errorHandler
  );
  if (callback) callback(retVal);
};
const errorHandler = () => {
  /* TODO document why this arrow function is empty */
};
export const createfile = (fileName) => {
  window.requestFileSystem(
    window.TEMPORARY,
    50 * 1024 * 1024,
    create.bind(null, fileName),
    errorHandler
  );
};
const create = (fs, filename) => {
  fs.root.getFile(fileName, { create: true, exclusive: true }, (fileEntry) => {}, errorHandler);
};
