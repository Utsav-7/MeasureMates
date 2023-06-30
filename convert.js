function openTab(evt, tabName) {
  // Get all tab content elements and hide them
  const tabContent = document.getElementsByClassName('tab-pane');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  // Remove 'active-tab' class from all tab navigation elements
  const tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
  }
  // Show the selected tab content and mark the corresponding tab as active
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active-tab');
}

//
// code for custom converter
//
function calculate() {
  var x = parseFloat(document.getElementById('x').value);
  var y = parseFloat(document.getElementById('y').value);
  var equation = document.getElementById('equation').value.toLowerCase(); // Convert equation to lowercase
  var result = evaluateEquation(x, y, equation);
  document.getElementById('result').textContent = "Result: " + result;
}

function evaluateEquation(x, y, equation) {
  try {
    var answer = eval(equation);
    return answer;
  } catch (error) {
    return 'Invalid equation';
  }
}

// 
// Calculate mileage, speed, distance by value 
//
function calculateValue() {
  var distanceInput = document.getElementById('distance');
  var fualInput = document.getElementById('fual');
  var mileageInput = document.getElementById('mileage');
  var mileageAns = document.getElementById('mileage-ans');

  var distance = parseFloat(distanceInput.value);
  var fual = parseFloat(fualInput.value);
  var mileage = parseFloat(mileageInput.value);

  if (isNaN(distance) && !isNaN(fual) && !isNaN(mileage)) {
    distance = fual * mileage;
    distanceInput.value = distance.toFixed(2);
    distanceInput.disabled = true;
    fualInput.disabled = false;
    mileageInput.disabled = false;
    var result = "Distance: "+ distance.toFixed(2) + " km";

    mileageAns.textContent = result;

  } else if (!isNaN(distance) && isNaN(fual) && !isNaN(mileage)) {
    fual = distance / mileage;
    fualInput.value = fual.toFixed(2);
    distanceInput.disabled = false;
    fualInput.disabled = true;
    mileageInput.disabled = false;

    var result = "Fual used: "+ fual.toFixed(2) + " litres";
    mileageAns.textContent = result;

  } else if (!isNaN(distance) && !isNaN(fual) && isNaN(mileage)) {
    mileage = distance / fual;
    mileageInput.value = mileage.toFixed(2);
    distanceInput.disabled = false;
    fualInput.disabled = false;
    mileageInput.disabled = true;

    var result = "Mileage: "+ mileage.toFixed(2) + " km/l";
    mileageAns.textContent = result;
  } else {
    distanceInput.disabled = false;
    fualInput.disabled = false;
    mileageInput.disabled = false;
  }


  // mileageAns.textContent = '';
  // if (!isNaN(distance) && !isNaN(fual) && !isNaN(mileage)) {
  //   var result = 'Distance: ' + distance.toFixed(2) + ' km, fual: ' + fual.toFixed(2) + ' kph, Mileage: ' + mileage.toFixed(2) + ' km/l';
  //   mileageAns.textContent = result;
  // }
}


//
// --- JAVASCRIPT UNIT CONVERTER

// If you study this file, you'll see that all the important data (namely, unit names and conversion factors) are explicitly defined as JavaScript arrays under the "Global Variable & Data Definitions" heading (which should be right under these comments).

// This is done, because: a) I figured it's the fastest way to do it, and b) it keeps everything in one file, making local storage and usage a snap.

// If you wanna mess with these array definitions, keep in mind the following (better study the definitions first before you read this; otherwise skip it altogether):

// 1) The unit[i][j] and factor[i][j] arrays should have the same j-length and their elements should correspond to each other in the j dimension; i.e. unit[0][2] should define the name and factor[0][2] the conversion factor of the SAME unit.  Duh!...

// 2) In every property (i.e. the i-dimension of the unit and factor arrays) there should be defined a 'primary' or 'base' unit, i.e. one with a conversion factor of 1.  The definitions of the other (secondary) units should use this formula:

// 1 [Secondary unit] = [Secondary unit conversion factor] [Primary Unit]
//                                   ^
//  This goes in the factor array ___|
//
//  e.g.: 1 ft = 0.3048 m

// ====================================
//  Global Variable & Data Definitions
// ====================================
var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Area";
unit[0] = new Array("Square meter (m^2)", "Acre (acre)", "Are", "Barn (barn)", "Hectare", "Rood", "Square centimeter", "Square kilometer", "Circular mil", "Square foot (ft^2)", "Square inch (in^2)", "Square mile (mi^2)", "Square yard (yd^2)");
factor[0] = new Array(1, 4046.856, 100, 1E-28, 10000, 1011.71413184285, .0001, 1000000, 5.067075E-10, 9.290304E-02, 6.4516E-04, 2589988, .8361274);

property[1] = "Length";
unit[1] = new Array("Nanometer (nm)", "Millimeter (mm)", "Centimeter (cm)","Meter (m)","Kilometer (km)","Inch (in)","Foot (ft)", "Mile (mile)", "Yard (yd)");
factor[1] = new Array( 1E-9 , .001, .01, 1, 1000, .0254, .3048, 1852, .9144);


property[2] = "Weight";
unit[2] = new Array("Milligram (mg)", "Gram (g)", "Kilogram (kg)", "Carat (ct)", "Pound (lbm)", "Ton (metric)", "Tonne");
factor[2] = new Array(1e-6, .001, 1, .0002, .4535924, 1000, 1000);

property[3] = "Temperature";
unit[3] = new Array("Celsius ('C)", "Fahrenheit ('F)", "Kelvin ('K)");
factor[3] = new Array(1, 0.555555555555, 1);
tempIncrement = new Array(0, -32, -273.15);

property[4] = "Currency";
unit[4] = new Array("USD - United States Dollar","EUR - Euro","GBP - British Pound Sterling","JPY - Japanese Yen","CAD - Canadian Dollar","AUD - Australian Dollar","CHF - Swiss Franc","CNY - Chinese Yuan Renminbi","SEK - Swedish Krona","NZD - New Zealand Dollar","KRW - South Korean Won","INR - Indian Rupee","BRL - Brazilian Real","RUB - Russian Ruble"); // Add more currency codes here
factor[4] = new Array(1, null, null, null, null, null, null, null, null, null, null, null, null, null); // Fill with initial values, will be updated from API response

property[5] = "Velocity & Speed";
unit[5] = new Array("Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (kph)", "Knot (int'l)", "Mile (US)/hour (mph)", "Mile (nautical)/hour", "Mile (US)/minute", "Mile (US)/second", "Speed of light (c)", "Mach (STP)(a)");
factor[5] = new Array(1, 5.08E-03, .3048, .2777778, .5144444, .44707, .514444, 26.8224, 1609.344, 299792458, 340.0068750);

property[6] = "Time";
unit[6] = new Array("Second (sec)", "Minute (minute)", "Hour (hour)", "Day (day)", "Month (month)","Year (year)");
factor[6] = new Array(1, 60, 3600, 8.640E4, 2628000, 31536000);

// ===========
//  Functions
// ===========

// Exchange rate API endpoint
var apiEndpoint = "https://api.exchangerate-api.com/v4/latest/USD"; // Replace with your preferred exchange rate API

function updateExchangeRates() {
  fetch(apiEndpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Update the conversion factors with the latest exchange rates
    factor[4][1] = data.rates.EUR; // Update with the corresponding currency codes
    factor[4][2] = data.rates.GBP;
    factor[4][3] = data.rates.JPY;
    factor[4][4] = data.rates.CAD;
    factor[4][5] = data.rates.AUD;
    factor[4][6] = data.rates.CHF;
    factor[4][7] = data.rates.CNY;
    factor[4][8] = data.rates.SEK;
    factor[4][9] = data.rates.NZD;
    factor[4][10] = data.rates.KRW;
    factor[4][11] = data.rates.INR;
    factor[4][12] = data.rates.BRL;
    factor[4][13] = data.rates.RUB;

    // Update the unit menus with the updated currency options
    var unitMenuA = document.getElementById("unit_menu_A");
    var unitMenuB = document.getElementById("unit_menu_B");
    FillMenuWithArray(unitMenuA, unit[0]);
    FillMenuWithArray(unitMenuB, unit[0]);
  })
  .catch(function(error) {
    console.log("Error fetching exchange rates: " + error);
  });
}

function UpdateUnitMenu(propMenu, unitMenu) {
  // Updates the units displayed in the unitMenu according to the selection of property in the propMenu.
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  // Fills the options of myMenu with the elements of myArray.
  // !CAUTION!: It replaces the elements, so old ones will be deleted.
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {
  // A simple wrapper function to validate input before making the conversion
  var sourceValue = sourceForm.unit_input.value;

  // First check if the user has given numbers or anything that can be made to one...
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    // If we can make a valid floating-point number, put it in the text box and convert!
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
// Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
var propIndex;
var sourceIndex;
var sourceFactor;
var targetIndex;
var targetFactor;
var result;

// Start by checking which property we are working in...
propIndex = document.property_form.the_menu.selectedIndex;

// Let's determine what unit are we converting FROM (i.e. source) and the factor needed to convert that unit to the base unit.
sourceIndex = sourceForm.unit_menu.selectedIndex;
sourceFactor = factor[propIndex][sourceIndex];

// Cool! Let's do the same thing for the target unit - the units we are converting TO:
targetIndex = targetForm.unit_menu.selectedIndex;
targetFactor = factor[propIndex][targetIndex];

result = sourceForm.unit_input.value;

// Simple, huh? let's do the math: a) convert the source TO the base unit: (The input has been checked by the CalculateUnit function).
if(property[propIndex]=="Currency"){
  result = result / sourceFactor;
  
  // Not done yet... now, b) use the targetFactor to convert FROM the base unit to the target unit...
  result = result * targetFactor;
}else{
  result = result * sourceFactor;
  result = result / targetFactor;
}
  // Handle Temperature increments!
if (property[propIndex] == "Temperature") {
  result = parseFloat(result) + tempIncrement[sourceIndex];
}
// Again, handle Temperature increments!
if (property[propIndex] == "Temperature") {
result = parseFloat(result) - tempIncrement[targetIndex];
}

// Ta-da! All that's left is to update the target input box:
targetForm.unit_input.value = result;
}

// This fragment initializes the property dropdown menu using the data defined above in the 'Data Definitions' section
window.onload = function(e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu);
  updateExchangeRates(); // Fetch initial exchange rates
}

// Restricting textboxes to accept numbers + navigational keys only
document.getElementByClass('numbersonly').addEventListener('keydown', function(e) {
var key = e.keyCode ? e.keyCode : e.which;

  if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
    (key == 65 && (e.ctrlKey || e.metaKey)) || // Select All 
    (key == 67 && (e.ctrlKey || e.metaKey)) || // Copy
    (key == 86 && (e.ctrlKey || e.metaKey)) || // Paste
    (key >= 35 && key <= 40) || // End, Home, Arrows
    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || // Numeric Keys
    (key >= 96 && key <= 105) // Numpad
    (key == 190) // Numpad
  )) e.preventDefault();
});