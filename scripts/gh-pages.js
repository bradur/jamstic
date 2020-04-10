import ghpages from 'gh-pages'
import config from './config/config'

ghpages.publish(
    `__sapper__/export/${config.repository}`,
    config.deploy,
    () => {
        console.log('Deploy Complete!')
    }
)