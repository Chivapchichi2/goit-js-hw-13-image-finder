 const getImg= async (link) => {
  try {
    const images = await fetch(link);
    const result = await images.json();
    return result;
  } catch (err) {
    throw err;
  }
};
export default getImg;

  
