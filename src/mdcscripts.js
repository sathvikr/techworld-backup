ripples = document.querySelectorAll('.ripple');

for (var i = 0; i < ripples.length; i++) {
	mdc.ripple.MDCRipple.attachTo(ripples[i]);
}