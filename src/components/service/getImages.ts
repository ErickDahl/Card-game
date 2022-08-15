async function getImages() {
  const response = await fetch(
    "http://shibe.online/api/shibes?count=8&httpsUrls=true",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export default getImages;
