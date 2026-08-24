---
title: Retrofit
date: 2019-08-16
category: Interactive Art
client: SOMArts
industry: Art
link: https://somarts.org/event/rebootingthefuture/
description: Custom arcade cabinet where visitors press buttons on an 8x4 grid to raise the elevation of the onscreen topography. Retrofit’s playful form invites viewers to manipulate its environment. As they work, sandy islands grow together and fill with trees, streets, houses, and hills. Over time the landscape responds by reshaping itself; changing, and then erasing, the players work.
---
### Concept
For SOMArts' 40th-anniversary "Rebooting the Future: Multimedia & Performance Arts Festival," artists were asked to imagine what the future might hold and what technological tools we might use, discard or redesign to get there. Retrofit explores themes of human agency, environmental change, and the fragility of our impact in an uncertain world.

### Tech Stack
- JavaScript
- React (UI state management and rendering)
- Three.js (3D rendering of the landscape with satellite imagery textures)
- Web MIDI API (browser-based MIDI input handling)
- Circuit Python Controller Firmware (Adafruit NeoTrellis M4 microcontroller)
- Satellite imagery (textures for elevation layers)

### Requirements & Design
With Retrofit I really wanted to push this idea of play to the forefront as a way to draw people in and maybe lower their defenses a little. That's what drove the choice of the arcade cabinet as a form and the tactile buttons which provided a straightfoward input method. My hope was, once you starting making something happen on screen you'd be curious to see the second-order consequences of those changes would be, with the use of satellite imagery from the local area extending those ideas about your sense of agency out into the real world.

### Build & Architecture
For the development process I was considering hardware integration, configuring the Adafruit NeoTrellis M4 microcontroller with Circuit Python firmware to output MIDI values when physical buttons were pressed. Then those MIDI input values were captured by the browser and mapped to corresponding grid coordinates on screen. The landscape was rendered in Three.js using meshes textured with satellite imagery. The verticies of those meshes were then manually manipulated, creating stretching and bending effects as the player pressed inputs. Finally in the background a modified Conway's Game of Life algorithm with multi-level elevation states (water, beach, forest, mountains) and bias toward gradual sinking created the core mechanic where formations adust to your inputs and then slowly erode back to water level.

### Delivery & Impact
A custom arcade cabinet where visitors press buttons on an 8x4 grid to raise the elevation of the onscreen topography. The landscape responds by reshaping itself; sandy islands grow and fill with trees, streets, houses, and hills. However, this control is temporary: islands build up and then sink back down, and eventually all formations return to water level. The piece presents a game form that invites playful interaction while inviting the viewer to consider how we can make change in an uncertain world, and what responsibilities come with our ability to shape our environment. The piece was shown was part of the "Rebooting the Future: Multimedia & Performance Arts Festival", SOMArts' 40th-anniversary program.
