'use strict';
let api_key = 'pQkmBsvQcgUC5xRkEhodAOUToRddgtoaEqd82yrL';
const AWS = require('aws-sdk');
const axios = require('axios').default

module.exports.wisconsinRssScraper = async event => {
    const rootUrl = "https://api.govinfo.gov/collections/";
    const startDate = new Date();
    const startDateStr = dateformat(startDate, "yyyy-mm-dd'T'hh:MM:ss'Z'"); 
    const allBillsUrl = rootUrl + startDateStr + "?offset=0&pageSize=999&api_key=" + api_key;
    const billList = await axios.get(allBillsUrl);
    const allPackages = billList.data.packages;
    allPackages.map(
      function (package) {
        var billData = await axios.get(package.packageLink)
        billData.data.
      }
      
    )
    // https://api.govinfo.gov/collections/BILLS/2019-08-28T20%3A18%3A10Z?offset=0&pageSize=9999&api_key=pQkmBsvQcgUC5xRkEhodAOUToRddgtoaEqd82yrL
    // let parsedOut = await ax.

    // Create the DynamoDB service object
    var ddb = new AWS.DynamoDB(
      {apiVersion: '2012-08-10',
       region: 'us-east-1'});
    const relevantEntries = parsedOut.items.filter(isRelatedToCrime)
    // Call DynamoDB to add the item to the table
    for (var iEntry = 0; iEntry < relevantEntries.length; iEntry++)
    {
      var params = {
        TableName: 'WisconsinHouseTable',
        Item: {
          'Title' : {S : relevantEntries[iEntry].title},
          'Content' : {S : relevantEntries[iEntry].content},
          'Link' : {S : relevantEntries[iEntry].link}
        }
      };
      const out = await ddb.putItem(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
        });
      await out.promise()
    }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};