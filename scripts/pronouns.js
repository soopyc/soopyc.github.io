const IDENTIFIERS = {
    unspecified: "unspecified",
    hh: "he/him",
    hi: "he/it",
    hs: "he/she",
    ht: "he/they",
    ih: "it/him",
    ii: "it/its",
    is: "it/she",
    it: "it/they",
    shh: "she/he",
    sh: "she/her",
    si: "she/it",
    st: "she/they",
    th: "they/he",
    ti: "they/it",
    ts: "they/she",
    tt: "they/them",
    any: "Any pronouns",
    other: "Other pronouns",
    ask: "Ask me my pronouns",
    avoid: "Avoid pronouns, use my name",
};

function loadPronouns() {
    const elem = document.getElementById("info-pronoun");
    elem.innerText = "loading...";

    fetch(
        "https://pronoundb.org/api/v1/lookup?platform=discord&id=397029587965575170",
        {
            credentials: "omit",
        }
    )
        .then(res => res.json())
        .then(data => {
            console.log('result: ' + data.pronouns)
            elem.innerText = IDENTIFIERS[data.pronouns]
        })
        .catch(err => {
            console.error('oops: ' + err)
            console.error(err.stack)
        })
}
