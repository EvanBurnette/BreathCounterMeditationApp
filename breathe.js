$(document).ready(function(){
    $("#lungs").one("click", (function(){
        var totalMinutes = document.getElementById("totalTime").value;//minutes
        var totalSeconds = totalMinutes*60;
        var breathTime = document.getElementById("breathTime").value;
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
        $("#overlay").toggle("slow");
        function timer() {
            count++;
            if (count == totalBreaths + 1)
            {
                let bell = new Audio('/juskiddink_singing-bowl-2.ogg');
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