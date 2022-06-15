turtle.home()
turtle.set_position(0, 0)
turtle.set_brightness(255)
turtle.turn_right()
turtle.pen(TurtlePenMode.DOWN)
turtle.forward(4)
turtle.turn_right()
turtle.forward(4)
turtle.turn_right()
turtle.forward(4)
turtle.turn_right()
turtle.forward(4)
turtle.pen(TurtlePenMode.UP)
basic.pause(1000)
basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")
basic.show_leds("""
    # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
""")
basic.show_leds("""
    # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
""")
basic.show_leds("""
    # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
""")
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")