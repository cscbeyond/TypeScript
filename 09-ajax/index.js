"use strict";
// 原生js封装的ajax
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 || xhr.status == 200) {
            console.log('success');
            if (config.type == 'json') {
                JSON.parse(xhr.responseText);
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://baidu.com',
    data: 'name=zhangsan',
    dataType: 'json'
});
