const text = document.getElementById('text')

Questions = [
    "Wonna learn programming?",
    "Wonna play Game?",
    "Wonna make business?",
    "Wonna make exercises?"
]

const random_quetion = Questions[Math.floor(Math.random() * Questions.length)]

text.innerHTML = random_quetion;