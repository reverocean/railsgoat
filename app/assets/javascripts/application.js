// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require wysiwyg/wysihtml5-0.3.0.js
//= require jquery.min.js
//= require bootstrap.js
//= require jquery.scrollUp.js
//= require wysiwyg/bootstrap-wysihtml5.js
//= require bootstrap-colorpicker.js
//= require date-picker/date.js
//= require date-picker/daterangepicker.js
//= require bootstrap-timepicker.js
//= require jquery.bootstrap.wizard.js
//= require jquery.sparkline.js
//= require tiny-scrollbar.js
//= require jquery.validate.js
//= require jquery.snippet.js
//= require jquery.easy-pie-chart.js

function rubyCodeFormat() {

$("pre.ruby").snippet("ruby",{style:"rand01",transparent:true,showNum:true});
    // Finds <pre> elements with the class "js"
    // and snippet highlights the JAVASCRIPT code within
    // using a random style from the selection of 39
    // with a transparent background
    // without showing line numbers.

};

$(document).ready(function(){
	rubyCodeFormat()
});