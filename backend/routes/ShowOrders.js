function getDestinations() {
    const uri = "https://goatedoff-default-rtdb.firebaseio.com;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        JSON.parse(xhr.responseText);
        showDestinations(books);
    }
    xhr.send(null);
}

function showDestinations(dest) {
    const tableContent = "<tr class='orderTitle'><td>Order Id</td><td>Destination</td></tr>\n";
    for (const i = 0; i < dest.length; ++i) {
        const record = dest[i];
        const addrs = record.ShipName + ", " + record.ShipAddress + ", " + record.ShipCity + ", " + record.ShipPostalCode + ", " + record.ShipCountry;
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