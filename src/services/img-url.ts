const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const media = "media/";
  const index = url.indexOf(media) + media.length;
  if (!index) return;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
