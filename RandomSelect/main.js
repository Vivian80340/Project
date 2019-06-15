var pic = [
    "http://inews.gtimg.com/newsapp_match/0/3163033381/0",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXeB43T4onz39AQV6QoXV3jcXLiR2Zx6U5KNPkVHulvRp2AB_",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosmJBNCdDdlwbyK8GGIJ1aexie2MNwQMFOtxeUCt8VWtp0FaY",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmm5-uJo1t1PdrYDPs-twDNTXlfO4siCQSeILEWFRD42FLHF-"
]

$(document).ready(function() {
    $("input").click(function()
    {
        //alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pic[randomChildNumber]);
        $("img").attr("width", 600);
    });
});