window.onload = function () {
    var button = document.getElementById("search");
    button.addEventListener("click", function () {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    populateTable(xmlhttp.responseText);
                }
                else if (xmlhttp.status == 400) {
                    alert('There was an error 400');
                }
                else {
                    alert('something else other than 200 was returned');
                }
            }
        };

        populateTable = function (data) {
            // Find a <table> element with id="myTable":
            var table = document.getElementById("stockTable");

            while (table.rows.length > 1) {
                table.deleteRow(1);
            }

            var jsonData = JSON.parse(data)

            for (var i = 0; i < 20; i++) {
                // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(i + 1);

                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                // Add some text to the new cells:
                cell1.innerHTML = jsonData[i].id;
                cell2.innerHTML = jsonData[i].name;
                cell3.innerHTML = "$" + jsonData[i].cost;
            }

        }

        xmlhttp.open("GET", "http://127.0.0.1:8080/search", true);
        xmlhttp.send();

    });
}

