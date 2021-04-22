let iter = 0
const job = document.getElementById('job')
const jobs = [
    'student',
    'python developer',
    'osu! addict',
    'minecraft player'
]
job.innerText = jobs[Math.floor(Math.random() * jobs.length)]

setInterval(() => {
    job.innerText = jobs[Math.floor(Math.random() * jobs.length)]
}, 5000)
