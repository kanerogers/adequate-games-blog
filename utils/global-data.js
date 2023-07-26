export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Adequate Games 👍';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : "We make games that are, you know, alright. They're okay.";

  return {
    name,
    blogTitle,
  };
};
