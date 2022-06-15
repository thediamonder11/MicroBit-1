turtle.home()
turtle.setPosition(0, 0)
turtle.setBrightness(255)
turtle.turnRight()
turtle.pen(TurtlePenMode.Down)
turtle.forward(4)
turtle.turnRight()
turtle.forward(4)
turtle.turnRight()
turtle.forward(4)
turtle.turnRight()
turtle.forward(4)
turtle.setPosition(1, 1)
turtle.turnRight()
turtle.forward(4)
turtle.setPosition(1, 2)
turtle.forward(4)
turtle.setPosition(1, 3)
turtle.forward(4)
turtle.pen(TurtlePenMode.Up)
basic.pause(1000)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    # # # . .
    # # # . .
    # # # . .
    # # # . .
    # # # . .
    `)
basic.showLeds(`
    # # . . .
    # # . . .
    # # . . .
    # # . . .
    # # . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
