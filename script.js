const season1Videos = [
    "https://www.youtube.com/watch?v=XSydUCMDXj4", // Ep1
    "https://www.youtube.com/watch?v=5DUxCiQGBjM", // Ep2
    "https://www.youtube.com/watch?v=G1oCIQyMqAQ", // Ep3
    "https://www.youtube.com/watch?v=HFxRL36MZe0", // Ep4
    "https://www.youtube.com/watch?v=LVdWbEtbR9M", // Ep5
    "https://www.youtube.com/watch?v=6Vru6hKva9E", // Ep6
    "https://www.youtube.com/watch?v=ZaLtNwexZA4", // Ep7
    "https://www.youtube.com/watch?v=rTHn-s8Fo7k", // Ep8
    "https://www.youtube.com/watch?v=AAiBnTd_sHY", // Ep9
    "https://www.youtube.com/watch?v=_om-yOiZ-7E" // Ep10
];

const season2Videos = [
    "https://www.youtube.com/watch?v=fbUR3ARU-qs", // Ep1
    "https://www.youtube.com/watch?v=d3Cg6838v4g", // Ep2
    "https://www.youtube.com/watch?v=2rR3BufEaiw", // Ep3
    "https://www.youtube.com/watch?v=XRHS38ISsE0", // Ep4
    "https://www.youtube.com/watch?v=HqwnlQI1ies", // Ep5
    "https://www.youtube.com/watch?v=jB4BtnRTgUQ", // Ep6
    "https://www.youtube.com/watch?v=c_IdY-8AFg4", // Ep7
    "https://www.youtube.com/watch?v=Rzs6SClA4BY", // Ep8
    "https://www.youtube.com/watch?v=u3r-DKvxQHg", // Ep9
    "https://www.youtube.com/watch?v=9EocfUlMbfo" // Ep10
];

let currentVideoIndex = { season1: 0, season2: 0 };

function prevVideo(season) {
    currentVideoIndex[season] = (currentVideoIndex[season] - 1 + season1Videos.length) % season1Videos.length;
    updateVideo(season);
}

function nextVideo(season) {
    currentVideoIndex[season] = (currentVideoIndex[season] + 1) % season1Videos.length;
    updateVideo(season);
}

function updateVideo(season) {
    const iframe = document.getElementById(`video-${season}`);
    iframe.src = season === "season1" ? season1Videos[currentVideoIndex[season]] : season2Videos[currentVideoIndex[season]];
}
