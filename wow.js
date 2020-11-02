let l=1;
let ll=1;
function incre(){
    if(l===1){
        document.getElementById('songs').style.animation='incre 0.5s ease';
        document.getElementById('songs').style.width='65vh';
        document.getElementById('songs').style.opacity='1';
        document.getElementById('back').style.display='block';
        if(ll===2){
            document.getElementById('more').style.animation='decre 0.5s ease';
            document.getElementById('more').style.width='0vh';
            document.getElementById('more').style.opacity='0';
            document.getElementById('backM').style.display='none';
        }
        l=2;
    }
    else{
        document.getElementById('songs').style.animation='decre 0.5s ease';
        document.getElementById('songs').style.width='0vh';
        document.getElementById('songs').style.opacity='0';
        document.getElementById('back').style.display='none';
        l=1;
    }
}
function back(){
    document.getElementById('songs').style.animation='decre 0.5s ease';
    document.getElementById('songs').style.width='0vh';
    document.getElementById('songs').style.opacity='0';
    document.getElementById('back').style.display='none';
    l=1;
}
function increM(){
    if(ll===1){
        document.getElementById('more').style.animation='incre 0.5s ease';
        document.getElementById('more').style.width='65vh';
        document.getElementById('more').style.opacity='1';
        document.getElementById('backM').style.display='block';
        if(l===2){
            document.getElementById('songs').style.animation='decre 0.5s ease';
            document.getElementById('songs').style.width='0vh';
            document.getElementById('songs').style.opacity='0';
        }
        ll=2;
    }
    else{
        document.getElementById('more').style.animation='decre 0.5s ease';
        document.getElementById('more').style.width='0vh';
        document.getElementById('more').style.opacity='0';
        document.getElementById('backM').style.display='none';
        ll=1;
    }

}
function backM(){
    document.getElementById('more').style.animation='decre 0.5s ease';
    document.getElementById('more').style.width='0vh';
    document.getElementById('more').style.opacity='0';
    document.getElementById('backM').style.display='none';
    ll=1;
}
