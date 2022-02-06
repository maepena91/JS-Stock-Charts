async function main () {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];

    let data = await fetch('https://twelvedata.com/account/api-keyscea826a8cb7f417c95908deafff2f2ad',)
    let stock = await data.json(); 
}

stocks.array.forEach(stock => stock.valies.reverse())

 new CharacterData(timeChartCanvas.getContext('2d'),{
type: "line",
data: {
    labels: stocks [0].values.map(value => value.datetime),
    dataseys : stocks.map(  stock => ({
        label: stock.meta.symbol,
        data:stock.values.map(value => parseFloat(value.high)),
        backgroundColor: getColor(stock.meta.symbol),
        borderColor: getColor(stock.meta.symbol),
    }))
}

})
;

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map( stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(value => parseFloat(value.high)),
            backgroundColor:  getColor(stock.meta.symbold),
            borderColor: getColor(stock.meta.symbol)
        }))
    }
});
    
;

function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}
main()