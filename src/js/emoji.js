import twemoji from "twemoji";

// config section
const twemojiConfig = {
    folder: "svg",
    ext: ".svg",
};

// there should ever only be one (one)
const main = document.getElementsByClassName("main")[0];
twemoji.parse(main, twemojiConfig);
