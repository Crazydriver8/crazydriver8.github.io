$(document).ready(function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
  /* Set up audio playback */
  var audio = new Audio('../content/doot_doot.mp3');
  var au = new Audio('../content/magic.mp3');
  $('.hella').click(function() {
		audio.play();
  });
  
  /* Start Video */
  $('#skeltal').click(function() {
		
  });
  
  $('#calcButton').click(function() {
	var origin = eval(document.getElementById("originYear").value);
	var destination = eval(document.getElementById("destinationYear").value);
	var mod = eval(document.getElementById("modYear").value);
	var age = eval(document.getElementById("age").value);
	var normalAge = destination - origin;
	if (mod == null) {
		mod = 1;
		$("#modYear").val(mod);
	}
	if (age == null) {
		var modAge = normalAge / mod;
		$("#age").val(modAge);
	} else if (origin == null) {
		if (destination == null) {
			alert("fuck you");
			return;
		}
		var realAge = age * mod;
		var originTemp = destination - realAge;
		$("#originYear").val(originTemp);
	} else if (destination == null) {
		var realAge = age * mod;
		var destTemp = origin + realAge;
		$("#destinationYear").val(destTemp);
	} else {
		alert("Please clear a field to calculate");
	}
  });
  
    var colors = ['purple', 'black', 'orange', 'cyan', 'pink', 'purple', 'black', 'orange', 'cyan', 'pink', 'purple', 'black', 'orange', 'cyan', 'pink', 'purple', 'black', 'orange', 'cyan', 'pink', 'purple', 'orange', 'cyan', 'pink'];

    $('#witchLucky').click(function () {
        console.log("Lucky Pressed!");

	    if (!au.paused) return;
	    au.play();
	    var oldVal = document.getElementById("age").value;
	    if (oldVal == null) oldVal = "";
	    var woop = 0;
	    var i = 0;
        (function loop() {
            console.log("Loop: " + i);
		    if (i > colors.length) {
			    $("#originYear").val("");
			    $("#destinationYear").val("");
			    $("#modYear").val("");
                $("#age").val("");
                i = 0;
		    }
		
            var color = colors[i];
            console.log("Color is : " + color);
		
            document.body.style.backgroundColor = color;
            if (colors.length) {
                setTimeout(loop, 500);
			    $("#originYear").val("");
			    $("#destinationYear").val("");
			    $("#modYear").val("");
			    $("#age").val("");
            }
		    switch (woop) {
			    case 0:
				    $("#originYear").val("FART");
				    woop++;
				    break;
			    case 1:
				    $("#destinationYear").val("FART");
				    woop++;
				    break;
			    case 2:
				    $("#modYear").val("FART");
				    woop++;
				    break;
			    case 3:
				    $("#age").val("FART");
				    woop++;
				    break;
			    case 4:
				    $("#originYear").val("BUTT");
				    woop++;
				    break;
			    case 5:
				    $("#destinationYear").val("BUTT");
				    woop++;
				    break;
			    case 6:
				    $("#modYear").val("BUTT");
				    woop++;
				    break;
			    case 7:
				    $("#age").val("BUTT");
				    woop = 0;
				    break;
			    default:
				    break;
		    }
		    i++;
		
        })();
	    $("#originYear").val("");
	    $("#destinationYear").val("");
	    $("#modYear").val("");
	    $("#result").val("");
    });

    $('#calcShopButton').click(function () {
        var placeholder = "12-26-2018 ";

        var name = document.getElementById("storeName").value;
        var inDate = document.getElementById("storeYear").value;
        var date = new Date(inDate);
        var inTime = document.getElementById("storeTime").value;
        var time = new Date(placeholder + inTime);
        
        console.log("Name: " + name + ", Date: " + inDate);
        var exists = false;
        for (var i = 0; i < shopList.length; i++) {
            var shop = shopList[i];
            if (!name.toLowerCase().localeCompare(shop.name.toLowerCase())) {
                if (new Date(shop.opened) <= date && date <= new Date(shop.closed)) {
                    if (new Date(placeholder + shop.opentime) <= time && time <= new Date(placeholder + shop.closetime)) {
                        console.log("time: " + time + "; open: " + new Date(placeholder + shop.opentime) + "; closed: " + new Date(placeholder + shop.closetime));
                        document.getElementById("shopAnswer").innerHTML = name + " was open on " + inDate + " at " + inTime;
                    } else {
                        console.log("time: " + time + "; open: " + new Date(placeholder + shop.opentime) + "; closed: " + new Date(placeholder + shop.closetime));
                        document.getElementById("shopAnswer").innerHTML = name + " was open on " + inDate + " but was closed at " + inTime;
                    }
                } else {
                    if (new Date(shop.closed) <= date) {
                        document.getElementById("shopAnswer").innerHTML = name + " was closed permanently by " + inDate;
                    } else {
                        document.getElementById("shopAnswer").innerHTML = name + " did not exist on " + inDate;
                    }
                }

                exists = true;
                break;
            }
        }

        if (!exists) {
            console.log(name + " was not found in this database");
            document.getElementById("shopAnswer").innerHTML = name + " was not found in this database";
        }
    });
});

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var shopList = [
    { "name": "Sherry's Succulents", "opened": "2000-05-05", "closed": "2090-06-30", "opentime": "09:00", "closetime": "17:00" },
    { "name": "Pete's Peppers", "opened": "1920-02-10", "closed": "N/A", "opentime": "09:00", "closetime": "17:00" },
    { "name": "Adam's Assault Association ", "opened": "1999-11-12", "closed": "1999-11-13", "opentime": "00:00", "closetime": "24:00" }
];

// Builds the HTML Table out of shopList.
function buildHtmlTable() {
    var columns = addAllColumnHeaders(shopList);

    for (var i = 0; i < shopList.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = shopList[i][columns[colIndex]];

            if (cellValue == null) { cellValue = ""; }

            row$.append($('<td/>').html(cellValue));
        }
        $("#shopTable").append(row$);
    }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(shopList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < shopList.length; i++) {
        var rowHash = shopList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $(selector).append(headerTr$);

    return columnSet;
}