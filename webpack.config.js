import path from 'path'

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './')
            , extensions: [ '.js', '.jsx' ]
        }
    }
}