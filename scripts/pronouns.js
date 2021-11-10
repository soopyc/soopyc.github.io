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
    const defaultPronoun = "sh";  // Used if pronoun request dies

    // Load pronouns via pronoundb (https://pronoundb.org/api/v1/lookup) api endpoint
    const user = {
        platform: "discord",  // the platform that the user is using
        id: "397029587965575170"  // the user's user id in platform, has to be string because javascript
    };
    const domObject = document.getElementById("info-pronoun");
    domObject.innerText = "loading";
    const loader = setInterval(() => {
        domObject.innerText += ".";
    }, 1000);

    const abortController = new AbortController();
    const timeout = setTimeout(() => {
        console.error("Pronouns request timed out, cancelling");
        abortController.abort();
    }, 4000);

    fetch(`https://pronoundb.org/api/v1/lookup?platform=${user.platform}&id=${user.id}`, {
        signal: abortController.signal,
        credentials: "omit"
    })
        .then(response => {
            if (response.status !== 200) {
                throw {
                    message: `Pronouns request failed with status ${response.status}`, 
                    name: "PronounsRequestFailed", 
                    status: response.status
                };
            }
            return response.json();
        })
        .then(data => {
            clearInterval(loader);
            console.log(`got pronouns: ${data.pronouns}`);
            domObject.innerText = IDENTIFIERS[data.pronouns];
            clearTimeout(timeout);
            console.log("timeout cleared.");
        })
        .catch(error => {
            clearInterval(loader);
            let errorText;
            switch (error.name) {
                case "PronounsRequestFailed":
                    errorText = `pronoundb error: cannot find user`;
                    break;
                case "AbortError":
                    errorText = "the request timed out. pronoundb may be down, try again later.";
                    break;
                default:
                    console.error(error);
                    errorText = "an unknown error.";
            }
            domObject.innerHTML = `<span id="info-pronoun-error">?(${IDENTIFIERS[defaultPronoun]})</span>`;

            tippy(domObject, {
                allowHTML: true,
                content: "<b>This might be outdated.</b><hr><i>why?</i><br>The request failed due to " + errorText 
            });
            clearTimeout(timeout);
            console.log("timeout cleared.");
        });
    
}
