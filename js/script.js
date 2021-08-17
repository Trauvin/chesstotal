const pecas = document.querySelectorAll('.lista-pecas li')
const pecaInfo = document.querySelectorAll('.xadrez-peca-info section')
const pecaMove = document.querySelectorAll('.move-peca div')

pecaInfo[0].classList.add('ativo')
pecaMove[0].classList.add('ativo')

function ativaPeca(index) {
  pecaInfo.forEach((item) => {
    item.classList.remove('ativo')
  })
  pecaMove.forEach((peca) => {
    peca.classList.remove('ativo')
  })
  pecaInfo[index].classList.add('ativo')
  pecaMove[index].classList.add('ativo')
}

pecas.forEach((peca, index) => {
  peca.addEventListener('click', function() {
    ativaPeca(index)
  })
})
