'use strict';
let Parser = require('rss-parser');
let parser = new Parser();
const AWS = require('aws-sdk');
function isRelatedToCrime(parsedItem) {
  const tags = 
  [
    /crime/gi,
    /judge/gi,
    /judicial/gi,
    /prison/gi,
    /jail/gi,
    /court/gi,
    /incarserat/gi,
    /law\senforcement/gi,
    /police/gi,
    /sentenc/gi,
  ]
  for (var iTag = 0; iTag < tags.length; iTag++){
    if (parsedItem.content.match(tags[iTag])) {
      return true
    }
  }
  return false
}
module.exports.wisconsinRssScraper = async event => {
    let parsedOut = await parser.parseURL("https://docs.legis.wisconsin.gov/feed/custom/introducedtext")
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
          'Link' : {S : relevantEntries[iEntry].link},
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
