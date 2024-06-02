#! /usr/bin/env node
import inquirer from "inquirer";
async function currencyConverter() {
    let from = await inquirer.prompt([{
            name: "currencyFrom",
            type: 'list',
            message: "Select any curreny to convert",
            choices: ['United States Dollar(USD)', 'Saudi Arabia riyal(SAR)', 'Pakistani Rupees(PKR)', 'Euro(EUR)', 'Japanese Yen(JPY)']
        },
        {
            name: "currencyTo",
            type: 'list',
            message: "In which currency do you want to convert",
            choices: ['United States Dollar(USD)', 'Saudi Arabia riyal(SAR)', 'Pakistani Rupees(PKR)', 'Euro(EUR)', 'Japanese Yen(JPY)']
        }]);
    let amount = await inquirer.prompt({
        name: "amountConvert",
        type: "number",
        message: `Enter how many ${from.currencyFrom}'s do you want to convert into ${from.currencyTo}:`
    });
    if (from.currencyFrom == "United States Dollar(USD)") {
        switch (from.currencyTo) {
            case 'United States Dollar(USD)': {
                console.log(`${amount.amountConvert} USD = ${amount.amountConvert} USD`);
                break;
            }
            case 'Saudi Arabia riyal(SAR)': {
                console.log(`${amount.amountConvert} USD = ${amount.amountConvert * 3.75} SAR`);
                break;
            }
            case 'Pakistani Rupees(PKR)': {
                console.log(`${amount.amountConvert} USD = ${amount.amountConvert * 278.06} PKR`);
                break;
            }
            case 'Euro(EUR)': {
                console.log(`${amount.amountConvert} USD = ${amount.amountConvert * 0.92} EUR`);
                break;
            }
            case 'Japanese Yen(JPY)': {
                console.log(`${amount.amountConvert} USD = ${amount.amountConvert * 156.69} JPY`);
                break;
            }
        }
    }
    else if (from.currencyFrom == 'Saudi Arabia riyal(SAR)') {
        switch (from.currencyTo) {
            case 'United States Dollar(USD)': {
                console.log(`${amount.amountConvert} SAR = ${amount.amountConvert * 0.27} USD`);
                break;
            }
            case 'Saudi Arabia riyal(SAR)': {
                console.log(`${amount.amountConvert} SAR = ${amount.amountConvert} SAR`);
                break;
            }
            case 'Pakistani Rupees(PKR)': {
                console.log(`${amount.amountConvert} SAR = ${amount.amountConvert * 74.14} PKR`);
                break;
            }
            case 'Euro(EUR)': {
                console.log(`${amount.amountConvert} SAR = ${amount.amountConvert * 0.25} EUR`);
                break;
            }
            case 'Japanese Yen(JPY)': {
                console.log(`${amount.amountConvert} SAR = ${amount.amountConvert * 41.78} JPY`);
                break;
            }
        }
    }
    else if (from.currencyFrom == 'Pakistani Rupees(PKR)') {
        switch (from.currencyTo) {
            case 'United States Dollar(USD)': {
                console.log(`${amount.amountConvert} PKR = ${amount.amountConvert * 0.00359637} USD`);
                break;
            }
            case 'Saudi Arabia riyal(SAR)': {
                console.log(`${amount.amountConvert} PKR = ${amount.amountConvert * 0.013486363} SAR`);
                break;
            }
            case 'Pakistani Rupees(PKR)': {
                console.log(`${amount.amountConvert} PKR = ${amount.amountConvert} PKR`);
                break;
            }
            case 'Euro(EUR)': {
                console.log(`${amount.amountConvert} PKR = ${amount.amountConvert * 0.0033095476} EUR`);
                break;
            }
            case 'Japanese Yen(JPY)': {
                console.log(`${amount.amountConvert} PKR = ${amount.amountConvert * 0.56434712} JPY`);
                break;
            }
        }
    }
    else if (from.currencyFrom == 'Euro(EUR)') {
        switch (from.currencyTo) {
            case 'United States Dollar(USD)': {
                console.log(`${amount.amountConvert} EUR = ${amount.amountConvert * 1.0866138} USD`);
                break;
            }
            case 'Saudi Arabia riyal(SAR)': {
                console.log(`${amount.amountConvert} EUR = ${amount.amountConvert * 4.074423} SAR`);
                break;
            }
            case 'Pakistani Rupees(PKR)': {
                console.log(`${amount.amountConvert} EUR = ${amount.amountConvert * 302.11569} PKR`);
                break;
            }
            case 'Euro(EUR)': {
                console.log(`${amount.amountConvert} EUR = ${amount.amountConvert} EUR`);
                break;
            }
            case 'Japanese Yen(JPY)': {
                console.log(`${amount.amountConvert} EUR = ${amount.amountConvert * 170.51194} JPY`);
                break;
            }
        }
    }
    else if (from.currencyFrom == 'Japanese Yen(JPY)') {
        switch (from.currencyTo) {
            case 'United States Dollar(USD)': {
                console.log(`${amount.amountConvert} JPY = ${amount.amountConvert * 0.0063720536} USD`);
                break;
            }
            case 'Saudi Arabia riyal(SAR)': {
                console.log(`${amount.amountConvert} JPY = ${amount.amountConvert * 0.023896069} SAR`);
                break;
            }
            case 'Pakistani Rupees(PKR)': {
                console.log(`${amount.amountConvert} JPY = ${amount.amountConvert * 1.7718762} PKR`);
                break;
            }
            case 'Euro(EUR)': {
                console.log(`${amount.amountConvert} JPY = ${amount.amountConvert * 0.0058638598} EUR`);
                break;
            }
            case 'Japanese Yen(JPY)': {
                console.log(`${amount.amountConvert} JPY = ${amount.amountConvert} JPY`);
                break;
            }
        }
    }
    askingg();
}
async function askingg() {
    let ask = await inquirer.prompt({
        name: "asking",
        message: "\n\nDo you want to Convert more?",
        type: "confirm",
        default: false,
    });
    if (ask.asking === true) {
        currencyConverter();
    }
    else {
        console.log("Have a nice day :)");
    }
}
currencyConverter();
