# Advanced Architecture

## Changes from 22.03.07 Codebase

The goal of this code is to setup the adding and removing of game objects. With enough time, we will cover the beginning of collisions

### Renamed
- RectangleGameObject in MainScene is now WallGameObject for consistency
- ScoreGameObject now exports ScoreGameObject for consistency

### Removed

### Added
- markForDelet in Gameobject
- Constants class
- Use of constants throughout game

### Changed
- tick() now calls Game update, draw, and remove directly.
- In order for components to know about the screen size, we pass ctx to both update() and draw().
- The walls, ball, and score now have a transparent border
- The score is now white, providing more contrast
- The secondsBetweenFrames in Time is now derived from milliseconds between frames (DRY).
- The millisecondsBetweenFrames has been lowered to 10.
- Removed unused argument in Circle constructor.

  

