while (true) {
    if (input.rotation(Rotation.Pitch) > 50) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}
