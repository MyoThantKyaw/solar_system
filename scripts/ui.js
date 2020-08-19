let btnPlayPause = document.getElementById("btn-play-pause");
btnPlayPause.isPlaying = true;
btnPlayPause.addEventListener('click', (event) => {
    if (btnPlayPause.isPlaying) {
        threeD.pauseOrbit();
        $("#btnPlayPauseIcon").removeClass("pause");
        $("#btnPlayPauseIcon").addClass("play");

    } else {
        threeD.playOrbit();

        $("#btnPlayPauseIcon").removeClass("play");
        $("#btnPlayPauseIcon").addClass("pause");
    }
    btnPlayPause.isPlaying = !btnPlayPause.isPlaying;
});

$('.ui.dropdown').dropdown();

$('#planets-dropdown').dropdown("set selected", -1);

let lastDropDownIndex = -1;
$('#planets-dropdown').dropdown({
    onChange: function(val) {
        let index = parseInt(val);
        if (index == lastDropDownIndex) {
            return;
        }
        threeD.showSelectedPlanet(index);
        lastDropDownIndex = index;

        if (index == -1) {
            if (!$(infoPanelTop).is(":hidden")) {
                $(infoPanelTop).slideToggle(600);
                // $(infoPanelBottom).slideToggle(600);
            }
            isSinglePlanetSelected = false;
        } else {
            if (!$(infoPanelTop).is(":hidden")) {
                $(infoPanelTop).slideToggle(600, function() {
                    // change content.... and show
                    changeInfoContent(index);
                    $(infoPanelTop).slideToggle(600);
                });
                // $(infoPanelBottom).slideToggle(600, function() {
                //     // change content.... and show
                //     // $(infoPanelBottom).slideToggle(600);
                // });
            } else {
                // change content and show....
                changeInfoContent(index);
                $(infoPanelTop).slideToggle(1200);
                // $(infoPanelBottom).slideToggle(1200);
            }
            isSinglePlanetSelected = true;
        }
    }
});

$('#about-panel').slideUp(600);
let aboutPlanetsPanelAll = document.getElementById('about-panel').children;

// let btnDesc = document.getElementById("btnDesc");
// btnDesc.addEventListener("click", function(evt) {
//     if ($('#text-panel').css("visibility") === "hidden") {

//         // threeD.showAboutPlanets(parseInt($('#planets-dropdown').dropdown("get value")));
//         let aboutIndex = parseInt($('#planets-dropdown').dropdown("get value")) + 1;

//         for (let i = 0; i < aboutPlanetsPanelAll.length; i++) {
//             if (i == aboutIndex) {
//                 $(aboutPlanetsPanelAll.item(i)).css("display", "block");

//             } else {
//                 $(aboutPlanetsPanelAll.item(i)).css("display", "none");
//             }
//         }

//         // let aboutnthPlanetPanel = document.getElementById('about-panel').children.item(aboutIndex);

//         $('#text-panel').css("visibility", "visible");
//         $('#text-panel').css("opacity", "1").promise().done(function() {
//             $('#about-panel').slideDown(600);
//         });
//     }
// });

let btnCloseTextPanel = document.getElementById("btn-close-text-panel");
btnCloseTextPanel.addEventListener("click", function(evt) {
    $('#about-panel').slideUp(600, function() {
        $('#text-panel').css("opacity", 0);
        $('#text-panel').css("visibility", "hidden");
    });
});

let infoPlanetsPanelTopAll = document.getElementById('info-panel-top').children;
let infoPlanetsPanelBottomAll = document.getElementById('info-panel-bottom').children;

let infoPanelTop = document.getElementById("info-panel-top");
let infoPanelBottom = document.getElementById("info-panel-bottom");

function changeInfoContent(index) {
    for (let i = 0; i < infoPlanetsPanelTopAll.length; i++) {
        if (i == index) {
            $(infoPlanetsPanelTopAll.item(i)).css("display", "block");
            $(infoPlanetsPanelBottomAll.item(i)).css("display", "block");
        } else {
            $(infoPlanetsPanelTopAll.item(i)).css("display", "none");
            $(infoPlanetsPanelBottomAll.item(i)).css("display", "none");
        }
    }
}
let view3D = document.getElementById("view-3d");

let isSinglePlanetSelected = false;

let btnSizeComparism = document.getElementById("btnSizeComparism");
let isSolarSystemShowing = true;

btnSizeComparism.addEventListener("click", function(evt) {

    if (isSolarSystemShowing && isSinglePlanetSelected) {

        $(infoPanelTop).slideToggle(600);
        // $(infoPanelBottom).slideToggle(600);

    } else if (isSinglePlanetSelected) {
        $(infoPanelTop).slideToggle(600);
        // $(infoPanelBottom).slideToggle(600);
    }

    threeD.handleBtnChangeCompClick();
    isSolarSystemShowing = !isSolarSystemShowing;

});
// btnChangeScene.addEventListener("click", function(evt) {

//     let changeScene = () => {

//         view3D.removeEventListener("transitionend", changeScene);

//         // change scene...

//         view3D.style.opacity = 1;
//     };
//     view3D.addEventListener('transitionend', changeScene);

//     view3D.style.opacity = 0;
// });

let btnResetView = document.getElementById("btnResetView");
btnResetView.addEventListener("click", function(evt) {
    threeD.resetView();
});

var btnInfo = document.getElementById("btnInfo");
btnInfo.addEventListener("click", function(evt) {
    // threeD.pauseAnimation();
    $('.ui.modal').modal({ closable: false }).modal('show');
});