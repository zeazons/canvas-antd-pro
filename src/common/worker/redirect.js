export const redirect = (refs, data) => {
  const { url } = data;

  window.location.replace(url);
};
