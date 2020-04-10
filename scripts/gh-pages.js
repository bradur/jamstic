var ghpages = require('gh-pages');
var config = require('./../config/config.json');

ghpages.publish(
    `__sapper__/export/${config.repository}`,
    config.deploy,
    () => {
        console.log('Deploy Complete!')
    }
)