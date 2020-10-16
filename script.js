var table = document.getElementById("table");

function calculatePrice() {	
	var nRowMultiplication = 1;
  	var totalSum = 0;

	for (var i = 1, row; row = table.rows[i]; i++) {
	  	nRowMultiplication = 1;
	    for (var j = 1, col; col = row.cells[j]; j++) {
	    	if ((j === 1 || j === 2) && i !== 4) {
				nRowMultiplication *= parseFloat(col.children[0].value);
	    	} else if (j === 3 && i !== 4) {
	    		if (!isNaN(nRowMultiplication)) {
	    			col.innerText = nRowMultiplication;
	    			totalSum += nRowMultiplication;
	    		}	    		
	    	}
	    	if (i === 4) {
	    		row.cells[j].innerText = totalSum;
	    	}
    	}
	    
	}
}

function sort() {
  var rows, switching, i, x, y, shouldSwitch;  
  switching = true;  
  while (switching) {   
    switching = false;
    rows = table.rows;   
    for (i = 1; i < (rows.length - 2); i++) {
      shouldSwitch = false;      
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];      
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}