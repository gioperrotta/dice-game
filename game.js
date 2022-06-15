const positions = [
  ['point5'],
  ['point1', 'point9'],
  ['point1', 'point5', 'point9',],
  ['point1', 'point3', 'point7', 'point9'],
  ['point1', 'point3', 'point5', 'point7', 'point9'],
  ['point1', 'point3', 'point4', 'point6', 'point7', 'point9']
]
const points = document.querySelectorAll('.point');

function clearFace() {
  points.forEach(elm => {
    elm.style.backgroundColor = 'beige'
  })
}

function resetPlay() {
  clearFace();
  setFaceResult(positions[4])
}

function setFaceResult(position) {
  position.forEach(elm => {
    const point = document.querySelector(`#${elm}`);
    point.style.backgroundColor = 'black'
  })
}

function togglePosition(position){
  clearFace();
  positions[position].forEach(element => {
    const point = document.getElementById(element);
    point.style.backgroundColor = point.style.backgroundColor == 'beige' ? 'black' : 'beige';
   });
 }

function animationFace(){
  let qtd = 1;
  let position = 0;
  nInterval = setInterval(() => {
    togglePosition(position);
    if (position == 5) {
      position = 0
    } else {
      position = position + 1;
    }
    qtd++;
   // console.log(qtd);

    if (qtd == 16) {
      clearInterval(nInterval) ;
      clearFace();
      const numeroJogado = Math.floor(Math.random() * 6);
    //  console.log('NUMERO JOGADO ->', numeroJogado + 1)
      setFaceResult(positions[numeroJogado]);
    }
  }, 200);

}

function teste() {
  animationFace();
}

async function jogar() {
  clearFace();
  animationFace();  
}

resetPlay();

