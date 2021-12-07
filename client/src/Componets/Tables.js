import React from 'react';
import io from 'socket.io-client';
import './main.css';

const PORT = process.env.PORT

const element = (id) => {
    return document.getElementById(id)};

const tableBody = element('tableBody')

const socket = io("https://equitypulse.herokuapp.com/");

if(socket !== undefined){
    console.log('connected to socket')
    console.log(PORT)

    socket.on('options', (data) => {
        if(data.length){
            for(var x=0; x<data.length;x++){
                var table = document.getElementById('options-tableBody')
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
                row.style.height = "41.5px";
                if (data[x].Symbol.slice(-1) === 'C') {
                    SymbolCell.style.color="green";
                } else {
                    SymbolCell.style.color="red";
                }
                // -------------------------------------

                if (parseInt(data[x].Quotes) > 500) {
                    row.classList.add('table-warning');
                    row.classList.add('bold');
                }

                if (parseInt(data[x].Trades) > 500) {
                    row.classList.add('table-warning');
                    row.classList.add('bold');
                }

                if (parseInt(data[x].BBO) > 500) {
                    row.classList.add('table-warning');
                    row.classList.add('bold');
                }
                
            }
        }
    });
    socket.on('futures', (data) => {
        if(data.length){
            for(var x=0; x<data.length;x++){
                var table = document.getElementById('futures-tableBody')
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

                if (parseInt(data[x].Quotes) > 140) {
                    row.classList.add('table-warning');
                    row.classList.add('bold');
                }

                if (parseInt(data[x].Trades) > 100) {
                    row.classList.add('table-warning');
                    row.classList.add('bold');
                }
            }
        }
    });
    socket.on('output', (data) => {
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

                if (parseInt(data[x].Quotes) > 800) {
                    row.classList.add('table-warning');
                    row.classList.add('bold');
                }

                if (parseInt(data[x].Trades) > 500) {
                    row.classList.add('table-warning');
                    row.classList.add('bold');
                }
            }
        }
    });

}
const Tables = () => {
    return (
        <div className="tables-container">

            <table className="table">
            <caption>Equities</caption>
                <thead>
                <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Quotes</th>
                    <th scope="col">BBO</th>
                    <th scope="col">Trades</th>
                </tr>
                </thead>
                <tbody id='tableBody'>
                </tbody>
            </table>
            <table className="table">
            <caption>Futures</caption>
                <thead>
                <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Quotes</th>
                    <th scope="col">BBO</th>
                    <th scope="col">Trades</th>
                </tr>
                </thead>
                <tbody id='futures-tableBody'>
                </tbody>
            </table>
            <table className="table">
            <caption>Options</caption>
                <thead>
                <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Quotes</th>
                    <th scope="col">BBO</th>
                    <th scope="col">Trades</th>
                </tr>
                </thead>
                <tbody id='options-tableBody'>
                </tbody>
            </table>
        </div>
    )
}

export default Tables
