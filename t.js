var drugpromise=d3.json("drugtesting.json")

var successFCN=  function(drugTesting)
{
console.log("drug testing", drugTesting);
drawTable(drugTesting)}

var failureFCN= function(errorMsg)
{console.log("something went wrong", errorMsg)}

drugpromise.then(successFCN, failureFCN)

var avgfatalities=function(drugTesting)
{var getfatalities=function(fatalities){
  return trials.fatalities
}
var fatalities=trials.fatalities.map(getfatalities)
var avgfatalties=d3.mean(fatalities)
return avgfatalties}

var avgPeople=function(drugTesting)
{var getmales=function(males){
  return trials.males
}
var getfemales=function(females){
    return trials.females
}
var nummales=trials.males.map(getmales)
var numfemales=trials.females.map(getfemales)
var malesmean=d3.mean(nummales)
var femalesmean=d3.mean(numfemales)
var avgpeople=malesmean+femalesmean
return avgpeople}

var drawTable=function(drugTesting)
{
var rows = d3.select("#mytable tbody")
  .selectAll("tr")
  .data(drugTesting)
  .enter()
    .append("tr")

rows.append("td")
  .text(drugTesting.drug)

rows.append("td")
  .text(avgfatalities)

rows.append("td")
  .text(avgPeople)
}

