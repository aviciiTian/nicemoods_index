/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'nicemoods_index');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

if (fis.IS_FIS3) {
    fis.media('tz').match('*', {
        optimizer: null,
        useHash: false,
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:18080/yog/upload',
            to: '/'
        })
    });
}
else {
    fis.config.set('deploy', {
        tz: {
            to: '/',
            // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
            receiver: 'http://127.0.0.1:18080/yog/upload'
        }
    });
}
