function LengthConvert() {
    var inputLengthValue = parseFloat(document.getElementById("inputLengthValue").value);
    var inputLengthUnit = document.getElementById("inputLengthUnit").value;
    var outputLengthUnit = document.getElementById("outputLengthUnit").value;

    var conversionRates1 = {
        m: { cm: 100, km: 0.001, mi: 0.000621371, ft: 3.28084, inch: 39.3701, yard: 1.09361},
        cm: { m: 0.01, km: 0.00001, mi: 0.00000621371, ft: 0.0328084, inch: 0.393701, yard: 0.0109361 },
        km: { m: 1000, cm: 100000, mi: 0.621371, ft: 3280.84, inch: 39370.1, yard: 1093.61 },
        mi: { m: 1609.34, cm: 160934, km: 1.60934, ft: 5280, inch: 63360, yard: 1760 },
        ft: { m: 0.3048, cm: 30.48, km: 0.0003048, mi: 0.000189394, inch: 12, yard: 0.333333 },
        inch: { m: 0.0254, cm: 2.54, km: 2.54e-5, mi: 1.5783e-5, ft: 0.0833333, yard: 0.0277778 },
        yard: { m: 0.9144, cm: 91.44, km: 0.0009144, mi: 0.000568182, ft: 3, inch: 36 },
    };
    if (inputLengthUnit === outputLengthUnit) {
    document.getElementById("result1").innerHTML = "Result: " + inputLengthValue + " " + inputLengthUnit;
    } else {
        var conversionRate1 = conversionRates1[inputLengthUnit][outputLengthUnit];
        if (conversionRate1) {
            var result = inputLengthValue * conversionRate1;
            document.getElementById("result1").innerHTML = "Result: " + result + " " + outputLengthUnit;
        } else { 
            document.getElementById("result1").innerHTML = "Invalid conversion";
        }
    }
}


function WeightConvert() {
    var inputWeightValue = parseFloat(document.getElementById("inputWeightValue").value);
    var inputWeightUnit = document.getElementById("inputWeightUnit").value;
    var outputWeightUnit = document.getElementById("outputWeightUnit").value;

    var conversionRates2 = {
        g: { kg: 0.001, lb: 0.00220462, oz: 0.035274, ton: 0.000001, quintal: 0.00001, carat: 5 },
        kg: { g: 1000, lb: 2.20462, oz: 35.274, ton: 0.001, quintal: 0.01, carat: 5000 },
        lb: { g: 453.592, kg: 0.453592, oz: 16, ton: 0.000453592, quintal: 0.00453592, carat: 2267.96 },
        oz: { g: 28.3495, kg: 0.0283495, lb: 0.0625, ton: 2.835e-5, quintal: 0.000283495, carat: 141.747 },
        ton: { g: 1e+6, kg: 1000, lb: 2204.62, oz: 35274, quintal: 10, carat: 5e+6 },
        quintal: { g: 1e+5, kg: 100, lb: 220.462, oz: 3527.4, ton: 0.1, carat: 5e+5 },
        carat: { g: 0.2, kg: 0.0002, lb: 0.000440925, oz: 0.00705479, ton: 2e-7, quintal: 2e-6 }
    };
    if (inputWeightUnit === outputWeightUnit) {
        document.getElementById("result2").innerHTML = "Result: " + inputWeightValue + " " + inputWeightUnit;
    } else {
        var conversionRate2 = conversionRates2[inputWeightUnit][outputWeightUnit];
        if (conversionRate2) {
            var result2 = inputWeightValue * conversionRate2;
            document.getElementById("result2").innerHTML = "Result: " + result2.toFixed(2) + " " + outputWeightUnit;
        } else { 
            document.getElementById("result2").innerHTML = "Invalid conversion";
        }
    }
}



function TemperatureConvert() {
    var inputTempValue = parseFloat(document.getElementById("inputTempValue").value);
    var inputTempUnit = document.getElementById("inputTempUnit").value;
    var outputTempUnit = document.getElementById("outputTempUnit").value;
  
    var conversionRates3 = {
        C: { F: function(c) { return c * 9/5 + 32; }, K: function(c) { return c + 273.15; } },
        F: { C: function(f) { return (f - 32) * 5/9; }, K: function(f) { return (f + 459.67) * 5/9; } },
        K: { C: function(k) { return k - 273.15; }, F: function(k) { return k * 9/5 - 459.67; } }
    };
    if (inputTempUnit === outputTempUnit) {
        document.getElementById("result3").innerHTML = "Result: " + inputTempValue + " " + inputTempUnit;
    } else {
        var conversionFunction3 = conversionRates3[inputTempUnit][outputTempUnit];
        if (conversionFunction3) {
            var result3 = conversionFunction3(inputTempValue);
            document.getElementById("result3").innerHTML = "Result: " + result3.toFixed(2) + " " + outputTempUnit;
        } else { 
            document.getElementById("result3").innerHTML = "Invalid conversion";
        }
    }
}

  
function CurrencyConvert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    const apiKey = "c7523c0d08dbd4926a3be07b"; // Replace with your ExchangeRate-API key

    const url = `https://v6.exchangerate-api.com/v6/c7523c0d08dbd4926a3be07b/latest/${fromCurrency}`;

    axios.get(url)
      .then(response => {
        const exchangeRate = response.data.conversion_rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch(error => {
        console.error(error);
      });
}
  
function TimeConvert() {
    var inputTimeValue = parseFloat(document.getElementById("inputTimeValue").value);
    var inputTimeUnit = document.getElementById("inputTimeUnit").value;
    var outputTimeUnit = document.getElementById("outputTimeUnit").value;
    
    var conversionRates5 = {
        s: { min: 1/60, h: 1/3600, day: 1/86400, week: 1/604800, month: 1/2.628e+6, year: 1/3.154e+7, leapyear: 1/3.154e+7 },
        min: { s: 60, h: 1/60, day: 1/1440, week: 1/10080, month: 1/43800, year: 1/525600, leapyear: 1/525600 },
        h: { s: 3600, min: 60, day: 1/24, week: 1/168, month: 1/730.001, year: 1/8760, leapyear: 1/8760 },
        day: { s: 86400, min: 1440, h: 24, week: 1/7, month: 1/30.417, year: 1/365, leapyear: 1/365 },
        week: { s: 604800, min: 10080, h: 168, day: 7, month: 1/4.345, year: 1/52.143, leapyear: 1/52.143 },
        month: { s: 2.628e+6, min: 43800, h: 730.001, day: 30.417, week: 4.345, year: 1/12, leapyear: 1/12 },
        year: { s: 3.154e+7, min: 525600, h: 8760, day: 365, week: 52.143, month: 12, leapyear: 1 },
        leapyear: { s: 3.154e+7, min: 525600, h: 8760, day: 366, week: 52.143, month: 12, year: 1 }
    };
      
    
    if (inputTimeUnit === outputTimeUnit) {
        document.getElementById("result5").innerHTML = "Result: " + inputTimeValue + " " + inputTimeUnit;
    } else {
        var conversionRate5 = conversionRates5[inputTimeUnit][outputTimeUnit];
        if (conversionRate5) {
            var result5 = inputTimeValue * conversionRate5;
            document.getElementById("result5").innerHTML = "Result: " + result5.toFixed(2) + " " + outputTimeUnit;
        } else { 
            document.getElementById("result5").innerHTML = "Invalid conversion";
        }
    }
}
