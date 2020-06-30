exports.sum = function (a, b) {
  return a + b;
};

exports.fetchData = function (callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve!");
      if (callback) callback("resolve!");
    }, 2000);
  });
};
