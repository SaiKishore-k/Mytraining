var obj = [];
var objPerPage = 5;

async function getResponse(searchQuery) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC7TfVTE5WaynZlTBlI_s2ZP4qrg8jQYN0&type=video&maxResults=15&q=${searchQuery}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  obj = data.items;
  return obj;
}

function noOfPage(objLength) {
  return Math.ceil(objLength / objPerPage);
}

function previousPage(currentPage) {
  if (currentPage > 1) {
    currentPage--;
    return currentPage;
  }
}

function nextPage(currentPage) {
  if (currentPage < noOfPage(100)) {
    currentPage++;
    return currentPage;
  }
}
