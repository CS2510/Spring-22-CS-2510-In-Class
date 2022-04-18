# Steps to create a camera so we can go backward with transition text

1. Find aspect ratio in pixels
2. Center aspect ratio
3. Add camera
4. Draw world space
   
So, when I draw a circle at 0,0 it is centered on the screen instead of being clipped at the upper left because if the following:

The aspect ratio "Letter Box" margin is calculated and everything in the scene is shifted because of that. Then the camera itself is introduced and everything in the scene is shifted so that the UL of the camera is at the UL of the clipping space.