var pre = window.location.href.split(":")[0];

var myDomOutline = DomOutline({ onClick: function(elem){
    var url = pre + "://localhost:3000/train/" + Base64.encode(JSON.stringify({"cat": "clickbait", "data": $(elem).text()}));
    $.get(url);
    console.log(url);
    console.log(Base64.encode(JSON.stringify({
        "cat": "clickbait",
        "data": $(elem).text()
    })));
    myDomOutline.stop();
    setTimeout($('a').off('click.myDisable'), 10);
}, filter: 'div, a, h1, h2, h3, p, li' });

myDomOutline.start();
$('a').on('click.myDisable', function(e) { e.preventDefault(); });