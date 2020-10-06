function getInfo() {
    var params = new URLSearchParams(location.search);
    var ticket = params.get('ticketCode') == null
        ? ''
        : params.get('ticketCode');
    var operation = params.get('operationName') === null
        ? ''
        : params.get('operationName');

    return [ticket, operation];
}


function drawInfo(params) {
    var ticketElem = document.getElementById("ticket");
    var operationElem = document.getElementById("operation");

    ticketElem.innerText = params[0] + "";
    operationElem.innerText = params[1] + "";

}

drawInfo(getInfo());