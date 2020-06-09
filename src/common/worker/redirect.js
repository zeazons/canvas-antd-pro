export const redirect = (data) => {
  const { url } = data;

  window.location.replace(url);
};
