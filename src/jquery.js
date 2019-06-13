

$( document ).ready(function() {
 
var thermostat = new Thermostat();
$('#temperature').text(thermostat._temperature);

$('#increase').on('click', function() { // event listener
  thermostat.up(); // update model
  $('#temperature').text(thermostat._temperature); 
})

$('#decrease').on('click', function() { 
  thermostat.down();
  $('#temperature').text(thermostat._temperature);
})

$('#powersave_on').on('click', function() {
  thermostat.powerSave(); 
  $('#powersave_status').text('Powersave mode is ON!'); 
})

$('#powersave_off').on('click', function() { 
  thermostat.powerSave(); 
  thermostat.togglePowerSave(); 
  $('#powersave_status').text('Powersave mode is OFF!'); 
})

$('#reset').on('click', function() { 
  thermostat.reset(); 
  $('#temperature').text(thermostat._temperature);
})

thermostat.current_energy_usage(); 
if ("low-usage") {
  $("#dot").css("background-color", "green");
} else if ("high-usage") {
  $("#dot").css("background-color", "red");
};



});

