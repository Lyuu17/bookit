module.exports = {
    devServer:{
        proxy:{
            '^/api':{
                target: 'http://localhost:3005/api',
                ws: true,
                changeOrigin: true,
            }
        }
    }
}