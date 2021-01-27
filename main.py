while True: 
    if input.rotation(Rotation.PITCH) > 50:
       light.show_animation(light.rainbowAnimation, 500)
    else:
        light.clear()
