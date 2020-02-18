export const FPicture = data => {
  const { file, description } = data.fields;

  return {
    src: file.url,
    alt: description && description
  };
};
