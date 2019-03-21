module.exports = {
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,	//解决未配置的hostname访问时报invalid host header的问题
    },
}