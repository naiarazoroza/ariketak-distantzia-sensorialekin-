let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (distantzia > 60) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    } else if (distantzia > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (distantzia > 20) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (distantzia > 10) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 20)
    } else if (distantzia > 5) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
basic.forever(function () {
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
