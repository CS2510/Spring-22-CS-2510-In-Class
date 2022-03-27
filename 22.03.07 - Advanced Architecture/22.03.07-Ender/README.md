# Advanced Architecture

## Changes from 22.02.28 Codebase

The goal of this code is to setup advanced game architecture concepts, specifically the Scene and Game class. 
This will allow us to have GameObject to GameObject communication.

### Renamed
- Renamed the game folder and .html file to 'pong_game' and 'pong.html' respectively

### Removed
- Removed constants file (no longer applicable since we aren't doing the zen game)
- Removed RectangleUpdateComponent (no longer applicable since we aren't doing the zen game)

### Added
- Added a Text class to the engine
- Added a TextDraw class to the engine
- Added a Circle class to the engine
- Added a CircleDraw class to the engine
- Added a ScoreGameObject to the game
- Added a ScoreUpdateComponent to the game
- Added a BallGameObject to the game
  

### Changed
- Import ScoreGameObject in pong.html
- Import BallGameObject in pong.html
- Push a new ScoreGameObject to gameObjects in pong.html
- Push a new BallGameObject to gameObjects in pong.html
