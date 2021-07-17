
var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
var actual = 0;
// console.log( cellWidth, cellHeight );

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  console.log(actual);
  actual++;
  if (actual == 10 ) {
    actual = 1;
  }

  

  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
    
}

function changeOpacity(actual) {
  console.log('Actual: ', actual);
  cellCount = 9;
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].style.opacity = 0.0;
  }
  cell = cells[actual - 1 ];
  cell.style.opacity = 1;


  // for ( var i=0; i < cells.length; i++ ) {
  //   var cell = cells[i];
  //   if ( i < cellCount ) {
  //     console.log(cell);
  //     // visible cell
  //     // cell.style.opacity = 0.5;
  //     // var cellAngle = theta * i;
  //     // cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
  //   }
  // }
}

// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener( 'click', function() {
//   selectedIndex--;
//   rotateCarousel();
// });
document.querySelector('.scene').addEventListener("click", nextButton);

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
  changeOpacity(actual);
});

var cellsRange = document.querySelector('.cells-range');
// cellsRange.addEventListener( 'change', changeCarousel );
// cellsRange.addEventListener( 'input', changeCarousel );



function changeCarousel() {
  cellCount = 9;
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 0.0;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

// var orientationRadios = document.querySelectorAll('input[name="orientation"]');
// console.log(orientationRadios);
// ( function() {
//   for ( var i=0; i < orientationRadios.length; i++ ) {
//     var radio = orientationRadios[i];
//     radio.addEventListener( 'change', onOrientationChange );
//   }
// })();

function onOrientationChange() {
  // var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  isHorizontal = true;
  console.log(isHorizontal);
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}

// set initials
onOrientationChange();
changeOpacity(actual);