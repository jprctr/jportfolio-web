---
title: Retrofit
date: 2019-08-16
category: Interactive Installation
client: SOMArts
industry: Art
link: https://somarts.org/event/rebootingthefuture/
description: An interactive arcade cabinet installation where visitors press buttons on an 8x4 grid to raise the elevation of onscreen topography, but the landscape gradually resets to water level, conveying the message that in an uncertain world, our ability to shape our environment is limited and temporary.
---
### Brief
Exhibition prompt: Imagine what the future might hold and what technological tools we might use, discard or redesign to get there. Our goal is to bring together artists who leverage technology and new media in order to access the imagination, Futurity, and the Divine.

### Tech Stack
- JavaScript
- React (UI state management and rendering)
- Three.js (3D rendering of the landscape with satellite imagery textures)
- Web MIDI API (browser-based MIDI input handling)
- Circuit Python Controller Firmware (Adafruit NeoTrellis M4 microcontroller)
- Satellite imagery (textures for elevation layers)

### Design Process
The design began with the concept of an arcade game about living in an uncertain world where the player's environmental changes are temporary and eventually erased. To match the Adafruit NeoTrellis M4 board as the input device, an 8x4 grid control scheme was designed with each button corresponding to a point in the landscape grid. For visualization, satellite imagery from San Francisco (near SOMArts) was used as textures, creating layers representing different elevation zones from water to beach, forest, and mountains. The core algorithm was a modified Conway's Game of Life where each cell has multiple elevation levels rather than binary states, with a bias toward gradual sinking back to water level.

### Development Process
The development process began with hardware integration, configuring the Adafruit NeoTrellis M4 microcontroller with Circuit Python firmware to output MIDI values when buttons were pressed. An input mapping system was then developed to map MIDI input values to corresponding grid coordinates in the browser application. The landscape was rendered in 3D using mesh vertices textured with satellite imagery, implementing manual vertex manipulation for stretching and bending effects. The modified Conway's Game of Life algorithm with multi-level elevation states (water, beach, forest, mountains) and bias toward gradual sinking was built and implemented. Finally, a smooth animation system was developed to show elevation changes and the landscape's response to player input.

### Delivered Result
A custom arcade cabinet installation where visitors press buttons on an 8x4 grid to raise the elevation of the onscreen topography. The landscape responds by reshaping itself—sandy islands grow and fill with trees, streets, houses, and hills. However, this control is temporary: little islands build up and then sink back down, and eventually all formations return to water level. The piece presents an arcade game form that invites playful interaction while conveying the message that in an uncertain world, our ability to shape our environment is limited and temporary. The installation was part of the "Rebooting the Future: Multimedia & Performance Arts Festival" at SOMArts' 40th-anniversary program, curated as a dialogue about imagining what the future might hold and how we might use, discard, or redesign technological tools to get there.

### Summary Narrative
I developed Retrofit as a solo artist for SOMArts' 40th-anniversary "Rebooting the Future" festival, creating an interactive arcade cabinet installation where visitors press buttons on an 8x4 grid to raise onscreen topography that gradually sinks back to water level via a modified Conway's Game of Life algorithm with multi-level elevation states. Using satellite imagery of the actual SOMArts neighborhood as textures and an Adafruit NeoTrellis M4 microcontroller for physical input, the piece combines a playful arcade interface with serious themes of environmental change and human agency, ultimately conveying that in an uncertain world, our ability to shape our environment is limited and temporary.
