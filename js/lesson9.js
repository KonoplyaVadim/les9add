/**
 * Created by konoplya on 15.06.2017.
 */
$(document).ready(function () {
    //Task2
    $("p:first,div:first").attr("style","background-color:red; width:100px; height:100px");
    $("span:first").attr({
        style:"background-color:red; width:100px; height:100px",
        display:"block"
    });
    //Task3
    $(".class1,.class2").attr("style","color:blue; font-size:24px; font-family: Tahoma; font-style: italic");
    //Task4
    $("div:has(span)").css("background", "yellow");
    //Task5
    $(".task5,#par2,#par3").css("text-transform","uppercase");
    //Task6
    $("input[type=submit]").on('click', changeValue);
    function changeValue(){
        $("input[type=text]").val("jQuery");
    }
    //Task7
    $("li>ul").css("color","red");
    $("ul>li:even").css("text-transform","uppercase");
    $(".first li>span:gt(3)").css("background-color","gray");
    $(".second li>span:gt(3)").css("background-color","gray");
    $(".third li>span:gt(3)").css("background-color","gray");
    $(".fourth li>span:gt(3)").css("background-color","gray");
    //Task8
    $(":button").on('click', setStyle);
    function setStyle(){
        $(":button").attr({
            style:"padding:20px;background-color:green; color:white;font-size:16px",
            name:"set_style"
        });
    }
    //Task9
    var olHeight = "";
    olHeight += "height() - " + $("ol").height() + "<br />";
    olHeight += "innerHeight() - " + $("ol").innerHeight() + "<br />";
    olHeight += "outerHeight() - " + $("ol").outerHeight(true) + "<br />";
    $("div#forHeight").html(olHeight);
});