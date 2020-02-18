import { FPicture } from "../Picture/Picture.contentful";

export const FPrimaryBanner = data => {
  const { title, body, image, linkUrl } = data;

  return {
    title,
    body,
    linkUrl: linkUrl && linkUrl.fields.url,
    image: FPicture(image)
  };
};
