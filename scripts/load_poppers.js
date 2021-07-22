function loadProjects() {
    for (let i of document.getElementsByClassName("projects")) {
        let licensetext
        if (i.hasAttribute('data-badge-license-disable') && i.getAttribute('data-badge-license-disable') === 'true') {
            licensetext = ''
        } else {
            licensetext = `<img alt="GitHub" src="https://img.shields.io/github/license/${i.getAttribute('data-github-slug')}?color=7af">`
        }
        tippy(i, {
            content: i.getAttribute('data-project-desc') + "<br>" +
                     `<img src="https://wakatime.com/badge/github/${i.getAttribute("data-wakatime-slug")}.svg" ` +
                     `alt="wakatime stats for the ${i.getAttribute("data-project-name")} project" />` +
                     licensetext,
            allowHTML: true
        })
    }
}

function loadPoppers() {
    const test = document.getElementById("test0")
    for (let i of document.getElementsByName('*')){
        test.innerHTML += i
    }
}
