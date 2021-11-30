
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://script.baertt.com/count2/callback?si=77f96f791746356535a7915e82w18450&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_four%253Fsignature%253DlXOy8gQJwx6DGYbAEV79DeloBF0P66r4PzMNdL3pWmnq02kveR%2526scene_id%253Dhome_feed%2526share_id%253D51354034410068011638193916%2526time%253D1638193916&_=1638193934567&jsonpcallback=jsonp6`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://focus.youth.cn/`,
'Host' : `script.baertt.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000730) NetType/WIFI Language/zh_CN`,
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
