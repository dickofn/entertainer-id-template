$("#ageSlider").slider({
 id: "ageSlider"
});

$("#ageSlider").on("slide", function(slideEvt) {
	$("#ageSliderLowVal").text(slideEvt.value[0]);
});

$("#ageSlider").on("slide", function(slideEvt) {
	$("#ageSliderHighVal").text(slideEvt.value[1]);
});
