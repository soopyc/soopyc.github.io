function loadProjects() {
    for (let i of document.getElementsByClassName("projects")) {
        tippy(i, {
            content: i.getAttribute('data-project-desc') + "<br>" +
                     `<img src="https://wakatime.com/badge/github/${i.getAttribute("data-wakatime-slug")}.svg" ` +
                     `alt="wakatime stats for the ${i.getAttribute("data-project-name")} project" />`,
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