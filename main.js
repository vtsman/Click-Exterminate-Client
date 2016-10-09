var pre = window.location.href.split(":")[0];
function deleteClickbaitNode(node){
    $.get(pre + "://localhost:3000/predict/" + Base64.encode(node.parent().text()), function(resp){
        if(JSON.parse(resp)["winner"] == "clickbait"){
            deleteClickbaitNode(node.parent());
        }
        else{
            node.remove();
        }
    });
}
$("a").each(function(index, elem){
    $.get(pre + "://localhost:3000/predict/" + Base64.encode($(elem).text()), function(resp){
        console.log(resp);
        if(resp == "clickbait"){
            //deleteClickbaitNode($(elem));
            console.log(elem);
            $(elem).parent().remove();
        }
    });
});