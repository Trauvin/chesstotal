function clickShowPiece() {

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
}
clickShowPiece()

function infoPlayer() {
  const jogadores = document.querySelectorAll('.jogador-info dt')

  jogadores[0].classList.add('ativo')
  jogadores[0].nextElementSibling.classList.add('ativo')

  jogadores.forEach((jogador) => {
    jogador.addEventListener('click', function() {
      jogador.classList.toggle('ativo')
      jogador.nextElementSibling.classList.toggle('ativo')
    })
  })
}

infoPlayer()


