const overlay = document.querySelector('.card__image_overlay')
document.querySelector('.card__image').addEventListener('mouseenter', () => {
    overlay.style.display = 'flex'
})
document.querySelector('.card__image').addEventListener('mouseleave', () => {
    overlay.style.display = 'none'
})

