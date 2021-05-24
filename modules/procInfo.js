const os = require('os')

function getName() {
    let procObj = os.cpus()
    let name = "";
    
    for (let i in procObj) {
        name += ++i + ". " + procObj[0]['model']
        name += "\n"
    }

    return name;
}

function getSpeed() {
    let procObj = os.cpus()
    let speed = ""

    for (let i in procObj) {
        speed += ++i + ". " + procObj[0]['speed']
        speed += "\n"
    }

    return speed;
}

module.exports = {
    name: getName(),
    speed: getSpeed()
}

