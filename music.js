var mysong = document.getElementById("mysong");
        var icon = document.getElementById("icon");
            
        icon.onclick = function()
        {
            if(mysong.paused)
            {
                mysong.play();
                icon.src="paus.png";
            }
            else
            {
                mysong.pause();
                icon.src="play-b.png"
            }
        }