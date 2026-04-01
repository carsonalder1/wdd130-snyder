const albumImages =[
    'images/albums/clancy.jpg',
    'images/albums/breach.jpg',
    'images/albums/dark_sun.jpg',
    'images/albums/forever_now.jpg',
    'images/albums/moments.jpg',
    'images/albums/night_visions.jpg',
    'images/albums/pep_talks.jpg',
    'images/albums/take_me_to_eden.jpg',
    'images/albums/the_weatherman.jpg',
    'images/albums/when_the_quiet_comes.jpg',
]

const artistImages =[
    'images/artists/attlas.jpeg',
    'images/artists/coldplay.jpg',
    'images/artists/deadmau5.jpg',
    'images/artists/hollow_coves.webp',
    'images/artists/imagine_dragons.jpg',
    'images/artists/of_monsters_and_men.jpg',
    'images/artists/sleep_token.webp',
    'images/artists/sultan_+_shepard.jpg',
    'images/artists/twenty_one_pilots.webp',
    'images/artists/tycho.webp',
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function populateGrid (images, gridId) {
    const grid = document.getElementById(gridId);
    const shuffled = shuffle([...images]);
    const selected = shuffled.slice(0, 4);
    console.log(selected.length);
    selected.forEach(function(imagePath) {
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'music-image';
    grid.appendChild(img);
});
}

populateGrid(albumImages, 'album-grid');
populateGrid(artistImages, 'artist-grid');