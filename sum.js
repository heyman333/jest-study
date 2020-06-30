exports.sum = function (a, b) {
  return a + b;
};

exports.fetchData = function (callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback("resolve!"));
    }, 2000);
  });
};
