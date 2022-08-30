console.log("Let's get this party started!");
const $searchInput = $('#search');
const $gifArea = $('#gif-container');

function addGif(res) {
    let gifURL = res.data['0'].images.original.url;
    let $newCol = $("<div>");
    let $newGif = $("<img>", { src: gifURL});

    $newCol.append($newGif);
    $gifArea.append($newCol);
} 

$('form').on('submit', async function(evt) {
    evt.preventDefault();

    let queryString = $searchInput.val();
    $searchInput.val('');

    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q: queryString, api_key: 'UNT1GOyCWwTYfOPlFaCXqZpRz03GLYZ3'}});
    // console.log(res);
    addGif(res.data);
});

$('#remove').on("click", () => $gifArea.empty());
