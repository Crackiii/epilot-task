export const _fetch = (path, opt) => {
  const baseURL = "http://localhost:4002";
  const options = {
    method: opt.method,
  };
  if ((opt.method = "POST")) {
    options.headers = {
      "Content-Type": "application/json",
    };

    if (opt.body !== undefined && opt.body !== null) {
      options.body = JSON.stringify({ ...opt.body });
    }
  }

  return fetch(`${baseURL + path}`, options)
    .then((data) => data.json())
    .catch((err) => console.log);
};
