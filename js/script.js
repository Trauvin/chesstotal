const pecas = document.querySelectorAll('.lista-pecas li')
const pecaInfo = document.querySelectorAll('.xadrez-peca-info section')

function ativaPeca(index) {
  pecaInfo.forEach((item) => {
    item.classList.remove('ativo')
  })
  pecaInfo[index].classList.add('ativo')
}

pecas.forEach((peca, index) => {
  peca.addEventListener('click', function() {
    ativaPeca(index)
  })
})
