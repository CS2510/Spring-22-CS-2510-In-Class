# Chase Game Transition Text

The chase game supports layers (World Space and Screen Space) and a camera. 

Often we want to have a transition between the two, i.e. a game object that follows something in World Space but is render in Screen Space. Examples include text that shouldn't zoom with the camera or a health bar.

In order to create transition text, we need to understand how we draw objects in World Space.

## Drawing in World Space

### Game Variables

cameraULX, cameraULY, cameraScale, cameraWidth, cameraHeight

### Scene 

The bulk of the camera a layer work is done in the Scene class.

1. Fill the window with the sidebar color
2. Compare the window aspect ratio to the game aspect ration.
3. Calculate the sidebar (margin) size
4. Calculate the pixel size of the view area.
5. Translate to create sidebars (margins)
6. Fill the view area with the scene's background color.
7. Clip all future draw calls to the view area.
8. Calculate the pixel size.
   1. Calculate the size of the camera in world space. This is done by dividing the width of the camera without scaling by the scale.
   2. Divide the view width (pixels) by the size of the camera in world space (world units). This calculates the number of pixels required to cover one unit world space.
9. Calculate the upper left hand coordinate of the camera in world space.