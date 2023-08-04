const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'development',
    devtool:'inline-source-map',
    // entry:'./src/entry.js',
    entry:{
        main:'./entry.js'
        // main: path.resolve(__dirname,'./src/entry.js')
    },
    output:{
        iife:true,
        clean:true,
        filename:'[name].js',
        path: path.resolve(__dirname,'dist')
    }
}