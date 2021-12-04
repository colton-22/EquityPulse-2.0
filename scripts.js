const element = (id) => {
    return document.getElementById(id)};

const tableBody = element('tableBody')

const socket = io('http://localhost:3000');

if(socket !== undefined){
    console.log('connected to socket')

    socket.on('output', (data) => {
        console.log(data);
        if(data.length){
            for(var x=0; x<data.length;x++){
                var table = document.getElementById('tableBody')
                var row = table.insertRow(0);
                var TimeCell = row.insertCell(0);
                var SymbolCell = row.insertCell(1);
                var QuotesCell = row.insertCell(2);
                var BBOCell = row.insertCell(3);
                var TradesCell = row.insertCell(4);

                TimeCell.innerHTML = `${data[x].Time}`
                SymbolCell.innerHTML = `${data[x].Symbol}`
                QuotesCell.innerHTML = `${data[x].Quotes}`
                BBOCell.innerHTML = `${data[x].BBO}`
                TradesCell.innerHTML = `${data[x].Trades}`
            }
        }
    });

}