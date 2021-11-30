
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://script.baertt.com/count2/callback?si=90fb922eed13ab3961e18ce9c674e2b4&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DyjOAEqLWPoZQngMaDMVlw8HRD5onc0P092g1K5N3rYk6pmxVGl%2526uid%253D57595533%2526phone_code%253D3bab0bbb3c62742e5d498ffc4b8607f1%2526scid%253D39499143%2526time%253D1627441731%2526app_version%253D1.7.8%2526sign%253D973a4698904b45ae4fc01c09899065f0&_=1627456262629&jsonpcallback=jsonp6`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://focus.youth.cn/`,
'Host' : `script.baertt.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000733) NetType/WIFI Language/zh_CN`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
