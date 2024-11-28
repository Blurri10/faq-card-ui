const expand = (id) => {
    document.querySelector(`#a${id}`).classList.toggle("hidden");
    document.querySelector(`#p${id}`).classList.toggle("hidden");
    document.querySelector(`#m${id}`).classList.toggle("hidden");
}

document.querySelectorAll('.question-block').forEach(question => {
    question.addEventListener('click', () => {
        expand(question.id.substring(1));
    })
})