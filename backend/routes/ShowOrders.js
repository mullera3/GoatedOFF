function getDestinations() {
    var uri = "http://services.odata.org/Northwind/Northwind.svc/Orders?orderby=OrderID&$select=OrderID,ShipName,ShipAddress,ShipCity,ShipPostalCode,ShipCountry&$format=json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        JSON.parse(xhr.responseText);
        showDestinations(books);
    }
    xhr.send(null);
}

function showDestinations(dest) {
    var tableContent = "<tr class='orderTitle'><td>Order Id</td><td>Destination</td></tr>\n";
    for (var i = 0; i < dest.length; ++i) {
        var record = dest[i];
        var addrs = record.ShipName + ", " + record.ShipAddress + ", " + record.ShipCity + ", " + record.ShipPostalCode + ", " + record.ShipCountry;
        if (i & 1 == 1) { // odd row
            tableContent += "<tr class='orderOdd'>";
        }
        else {
            tableContent += "<tr class='orderEven'>";
        }
        tableContent += "<td>" + record.OrderID + "</td><td>" + addrs + "</td></tr>\n";
    }
    document.getElementById("showTab").innerHTML = tableContent;
}