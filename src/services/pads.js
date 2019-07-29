export const getPadsPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.warn("fetching data");
      fetch(process.env.PUBLIC_URL + "/data.json")
        .then(data => {
          const response = data.json();
          console.warn("fetching success", response);
          resolve(response);
        })
        .catch(error => reject(error));
    }, 1000);
  });
};
