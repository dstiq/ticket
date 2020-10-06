function getInfo() {
    var params = new URLSearchParams(location.search);
    var ticket = params.get('ticket');
    var operation = params.get('operation');
    var dateTime = params.get('dateTime');
    return [ticket, operation, dateTime];
}


function drawInfo(params) {
    var ticketElem = document.getElementById("ticket");
    var operationElem = document.getElementById("operation");
    var dateTimeElem = document.getElementById("dateTime");
    ticketElem.innerText = params[0] + "";
    operationElem.innerText = params[1] + "";
    dateTimeElem.innerText = params[2] + "";
}

function main() {
    drawInfo(getInfo())
}