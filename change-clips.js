//déclaration des fonctions
//Fonctions pour afficher les images des trois clips
function clip1() {
    $("#clip-dot-1").css( "opacity", "1" );
    $("#clip-dot-2").css( "opacity", "0.3" );
    $("#clip-dot-3").css( "opacity", "0.3" );
    $("#clips").css( "background-image", "url(resources/medias/img/clip-1.jpg)" );
}

function clip2(){
    $("#clip-dot-1").css( "opacity", "0.3" );
    $("#clip-dot-2").css( "opacity", "1" );
    $("#clip-dot-3").css( "opacity", "0.3" );
    $("#clips").css( "background-image", "url(resources/medias/img/clip-2.jpg)" );
}

function clip3(){
    $("#clip-dot-1").css( "opacity", "0.3" );
    $("#clip-dot-2").css( "opacity", "0.3" );
    $("#clip-dot-3").css( "opacity", "1" );
    $("#clips").css( "background-image", "url(resources/medias/img/clip-3.jpg)" );
}





//Affichage des clips
function clipPopUp1() {
    $("#clip-video-1").css( "display", "block" );
}

function clipPopUp2() {
    $("#clip-video-2").css( "display", "block" );
}

function clipPopUp3() {
    $("#clip-video-3").css( "display", "block" );
}

//Cache tous les clips
function hideAllClips() {
    $(".pop-up-clip-box").css( "display", "none" );
}




//Mets le clip 1 au chargement de la page
clip2();

//Cache toutes les pop up de base
hideAllClips();





//  Actions lors des clics sur les points
//Si clic sur popint 1 alors ca mets l'opacité de ce dernier à 1 et celle des autres points à 0.3, puis mets l'image clip-1 en background image
$("#clip-dot-1").click( function (){
    clip1();
});

//Si clic sur point 2 alors ca mets l'opacité de ce dernier à 1 et celle des autres points à 0.3, puis mets l'image clip-2 en background image
$("#clip-dot-2").click( function (){
    clip2();
});

//Si clic sur point 3 alors ca mets l'opacité de ce dernier à 1 et celle des autres points à 0.3, puis mets l'image clip-3 en background image
$("#clip-dot-3").click( function (){
    clip3();
});





//Actions des clics sur les flèches
//Si clic sur flèche de droite
$("#clip-right-arrow").click( function (){
    if ($('#clip-dot-1').css('opacity')=='1') {
        clip2();
    } else if ($('#clip-dot-2').css('opacity')=='1') {
        clip3();
    } else {
        clip1();
    }
});

//Si clic sur flèche de gauche
$("#clip-left-arrow").click( function (){
    if ($('#clip-dot-1').css('opacity')=='1') {
        clip3();
    } else if ($('#clip-dot-2').css('opacity')=='1') {
        clip1();
    } else {
        clip2();
    }
});





//Affichage des pop-up des clips au clic sur le bouton play
$("#clip-play-button").click( function (){
    if ($('#clip-dot-1').css('opacity')=='1') {
        clipPopUp1();
    } else if ($('#clip-dot-2').css('opacity')=='1') {
        clipPopUp2();
    } else {
        clipPopUp3();
    }
});

//Fermer la pop up
$(".close-pop-up").on('click', function (){
    //console.log("click sur close");
    hideAllClips();
});