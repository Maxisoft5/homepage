var documnet = 
$(documnet).ready(function show(){
    $("li.text").hide();
    $("div.triangel").click(function(){
        $("li.text").slideToggle(400);
    });
});
