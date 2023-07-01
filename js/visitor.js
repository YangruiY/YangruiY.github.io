// fetch('https://api.gmit.vip/Api/UserInfo')
//     .then(data=>data.json())
//     .then(data=>{
//     let html = '<style>.visitor_location{color:#cb4c46;font-weight:bold;}.visitor_ip{color:#2d80c2;font-weight:bold;}</style>'
//     html += '<div class="visitor">'
//     html += '您正处于 ' + '<span class="visitor_location">' + data.data.location + '</span>'
//     html += '<br>'
//     html += '您的IPV6：' + '<span class="visitor_ip">' + data.data.ip + '</span>' //TODO IPV6-->IPV4
//     html += '</div>'
//     document.getElementById('visitor-container').innerHTML = html
// }).catch(function(error) {
//     console.log(error);
// });