window.onload=function(){
    var bgm=document.getElementById('audio_bgm');
    var play=document.getElementById('start');
    var pause=document.getElementById('pause');
    var state='pause';
    play.onclick=function(){
        if(bgm.paused){
            bgm.play();
            state='playing';
            console.log(state);
        }
    }
    pause.onclick=function (){
        if(bgm.play){
            bgm.pause();
            state='pause';
            console.log(state);
        }
    }
}