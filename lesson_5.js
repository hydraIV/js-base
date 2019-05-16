var $board = document.getElementById('board');
var $table = document.createElement('table');

var leters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

$board.classList.add('board');

for(var i = 0; i < 10; i++) {

  var $row = document.createElement('tr');

  for(var j = 0; j < 10; j++) {

    var $cell = document.createElement('td');

    if (i == 0) {

            $cell.classList.add('legend_let');
            $cell.textContent = leters[j];

    } else {

        if (i%2 == j%2) {
            $cell.classList.add('cell', 'white');
        } else {
            $cell.classList.add('cell', 'black');
        }

    }
    $row.appendChild($cell);
  }

  $table.appendChild($row);
}

$board.appendChild($table);