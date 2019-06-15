$(document).ready(function()
{
    $("#courseTable").append("<tr><th>集數</th><th>播出日期</th><th>主題</th><th>備註</th></tr>");
    
    var topicCount=topic.length;
    
 //   var secoundUnit =1000;
//    var minuteUnit =secoundUnit*60;
//    var hourUnit=minuteUnit*60;
  //  var dayUnit=hourUnit*24;
    
    for(var x=0;x<topicCount;x++)
        {
//            if(topic[x]=="不上課")
            {
//                 document.getElementsById("courseTable").style.color="red";
//                document.getElementsById("class").style.color="blue";
            }
                $("#courseTable").append("<tr >");
                $("#courseTable").append("<td>"+(x+1)+"</td>");
       //         $("#courseTable").append("<td>"+(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
                $("#courseTable").append("<td>"+date[x]+"</td>");
                $("#courseTable").append("<td>"+topic[x]+"</td>");
                $("#courseTable").append("<td>"+game[x]+"</td>");
                $("#courseTable").append("</tr>");
            
            
        }
});