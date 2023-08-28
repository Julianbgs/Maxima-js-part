const json = {
    "Offline work": "Offline matters",
    "Quick Search [S]": "Quick Search [S]",
    "Task list": "Cases",
    "Enter address": "Enter address",
    "Brand": "Brand"
}

const toJSON = JSON.stringify(json)

console.log(toJSON);

console.log(JSON.parse(toJSON));