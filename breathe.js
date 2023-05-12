$(document).ready(function(){
    
var bRadius = Math.ceil($("body").width()/4)+25;
var mRadius = bRadius + 50 + 10;
var totalMinutes = 20;
var breathTime = 7.5;

$("#mslider").roundSlider({
        sliderType: "min-range",
        handleShape: "square",
        radius: mRadius,
        value: 20,
        lineCap: "round",
        width: 50,
        min: 0,
        max: 60,
        step: 1,
        change: function (args) {
            totalMinutes = args.value;
        $("#mTime").html(args.value);}
            });
$("#bslider").roundSlider({
    sliderType: "min-range",
    handleShape: "Square",
    radius: bRadius,
    value: 7.5,
    step: 0.5,
    min: 0.5,
    max: 15,
    width: 50,
    lineCap: "round",
    change: function (args) {
        breathTime = args.value;
    $("#bTime").html(args.value);}
        });
    $("#lungs").one("click", (function(){
        var totalSeconds = totalMinutes*60;
        
        var totalBreaths = Math.ceil((totalSeconds)/breathTime);
        var count = 1;
        $("#lungs").css("animation-name", "lungsAnimation")
        var animationTime =  (breathTime*2).toString() + "s";
        $("#lungs").css("animation-duration", animationTime);
        $("#counter").html(count);
        $("#counter").css("padding-top", "5vw");
        var counter = setInterval(timer, breathTime*1000);
        var breathIn = new Audio('breathIn.ogg');
        breathIn.play();
        var breathOut = new Audio('breathOut.ogg');
        let bell = new Audio('/juskiddink_singing-bowl-2.ogg');
        $("#overlay").toggle("slow");
        function timer() {
            count++;
            if (count == totalBreaths + 1)
            {
                bell.play();
                $("#counter").html("Morning");
                return;
            }
            if (count % 2 == 0) {
                breathOut.play();
            }
            else {
                breathIn.play();
            }
            $("#counter").html(count); // watch for spelling
        }
    }));
});
