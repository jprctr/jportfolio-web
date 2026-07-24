# Project: Retrofit

## Client
- **Name**: SOMArts (San Francisco Arts Commission)
- **Industry**: Contemporary Art / Multimedia Arts Festival
- **Link**: https://somarts.org/event/rebootingthefuture/, https://jamesaproctor.com/retrofit

## Brief
Exhibition prompt: Imagine what the future might hold and what technological tools we might use, discard or redesign to get there. Our goal is to bring together artists who leverage technology and new media in order to access the imagination, Futurity, and the Divine.

## Stakeholders
- **Curator**: Sian Morson and Kolmel W. Love (Rebooting the Future festival curators)
- **Festival**: Rebooting the Future: Multimedia & Performance Arts Festival (part of SOMArts 40th-anniversary program)
- **Location**: SOMArts, San Francisco

## Team Members
- Myself

## My Role
Full-stack developer and artist responsible for:
- Creating the game logic based on Conway's Game of Life with multi-level elevation states
- Implementing the landscape reshaping algorithm that gradually resets terrain to water level
- Developing the visualization system for satellite imagery with depth-mapped images
- Building the browser-based rendering system with manual vertex manipulation
- Configuring the Adafruit NeoTrellis M4 microcontroller to output MIDI values
- Mapping MIDI inputs to corresponding grid values in the browser
- Building the physical arcade cabinet with tabletop design

## Audience
Festival attendees, multimedia art viewers, and interactive installation enthusiasts interested in themes of environmental change, human agency, and the impermanence of our impact on the world.

## Design Process, Challenges, Solutions

### Design Process
1. **Concept Development**: Created the idea of an arcade game about living in an uncertain world where the player's environmental changes are temporary and eventually erased.

2. **Control Scheme Design**: Designed the 8x4 grid control scheme to match the Adafruit NeoTrellis M4 board used as the input device, with each button corresponding to a point in the landscape grid.

3. **Visualization Development**: Used satellite imagery from San Francisco (near SOMArts) as textures, creating layers representing different elevation zones from water to beach, forest, mountains.

4. **Algorithm Development**: Created a modified Conway's Game of Life algorithm where each cell has multiple elevation levels rather than binary states, with a bias toward gradual sinking back to water level.

### Design Challenges
- **User Feedback**: Giving the user clear feedback on the impact of their selection by using animation and lighting to distinguish direct elevation changes from second-order consequences as the landscape responds.
- **Uncanny Aesthetic**: Creating an "uncanny reflection" of the familiar SOMArts neighborhood that feels both recognizable and digitally distorted.
- **Impermanence Communication**: Effectively communicating the temporary nature of player control through visual and interactive means.
- **Scale and Atmosphere**: Balancing the arcade game's playful form with the serious themes of environmental change and human agency.

### Solutions
- **Visual Feedback**: Used smooth animations to show immediate elevation changes, with slower transitions showing the landscape's response and eventual erosion.
- **Satellite Imagery**: Chose real satellite images from the actual location to create immediate recognition while the digital manipulation created the uncanny effect.
- **Progressive Reset**: The algorithm gradually adjusts cell states based on neighbors, creating a believable natural process of erosion and submersion.
- **Physical Arcade Form**: The tabletop arcade cabinet with 24" diagonal display created an inviting, playful interface that contrasted with the serious underlying message.

## Tech Stack
- JavaScript
- React (UI state management and rendering)
- Three.js (3D rendering of the landscape with satellite imagery textures)
- Web MIDI API (browser-based MIDI input handling)
- Circuit Python Controller Firmware (Adafruit NeoTrellis M4 microcontroller)
- Satellite imagery (textures for elevation layers)

## Development Process, Challenges, Solutions

### Development Process
1. **Hardware Integration**: Configured the Adafruit NeoTrellis M4 microcontroller with Circuit Python firmware to output MIDI values when buttons were pressed.

2. **Input Mapping**: Developed the system to map MIDI input values to corresponding grid coordinates in the browser application.

3. **Landscape Rendering**: Created the 3D landscape using mesh vertices textured with satellite imagery, implementing manual vertex manipulation for stretching and bending effects.

4. **Game Logic Implementation**: Built the modified Conway's Game of Life algorithm with multi-level elevation states (water, beach, forest, mountains) and bias toward gradual sinking.

5. **Animation System**: Developed smooth animations for elevation changes and the landscape's response to player input.

### Development Challenges
- **Landscape Reset**: Ensuring the landscape doesn't get stuck in a given state but instead gradually resets to a neutral starting point using an algorithm based on Conway's Game of Life.
- **MIDI Integration**: Successfully integrating the Web MIDI API with the physical controller hardware for low-latency button response.
- **Vertex Manipulation**: Manually manipulating mesh vertices to achieve the stretching and bending effects while maintaining performance.
- **Multi-layer Blending**: Creating smooth transitions between the different elevation layers (water, beach, forest, mountains) with appropriate visual blending.

### Solutions
- **Cellular Automaton**: Implemented Conway's Game of Life principles with multiple states, checking each cell's neighbors at regular intervals to adjust elevation levels.
- **Bias Algorithm**: Modified the algorithm to create a smooth gradient between zones while maintaining the overall bias toward water-level reset.
- **MIDI Mapping**: Created a straightforward mapping system between MIDI values and grid coordinates for intuitive control.
- **Efficient Rendering**: Used Three.js efficiently with appropriate update triggers to maintain smooth animations while manipulating many vertices.

## Delivered Result
A custom arcade cabinet installation where visitors press buttons on an 8x4 grid to raise the elevation of the onscreen topography. The landscape responds by reshaping itself—sandy islands grow and fill with trees, streets, houses, and hills. However, this control is temporary: little islands will build up and then sink back down, and eventually all formations return to water level. The piece presents an arcade game form that invites playful interaction while conveying the message that in an uncertain world, our ability to shape our environment is limited and temporary. The installation was part of the "Rebooting the Future: Multimedia & Performance Arts Festival" at SOMArts' 40th-anniversary program, curated as a dialogue about imagining what the future might hold and how we might use, discard, or redesign technological tools to get there.

---

## Consolidated Narrative

I developed Retrofit as a solo artist for the "Rebooting the Future: Multimedia & Performance Arts Festival" organized by SOMArts (San Francisco Arts Commission) as part of their 40th-anniversary program. The festival brought together artists leveraging technology and new media to explore themes of futurity, the divine, and what technological tools we might use, discard, or redesign for the future. The exhibition prompt asked artists to imagine what the future might hold and how we might access the imagination and divine through technology.

Retrofit was conceived as an arcade game about living in an uncertain world where the player's environmental changes are temporary and eventually erased. I created the complete experience from concept to physical installation, building a browser-based rendering system with manual vertex manipulation, developing a visualization system for satellite imagery with depth-mapped images, and configuring an Adafruit NeoTrellis M4 microcontroller to output MIDI values that mapped to corresponding grid values in the browser.

The core game logic was based on a modified version of Conway's Game of Life, but instead of binary states, each cell had multiple elevation levels (water, beach, forest, mountains) with a bias toward gradual sinking back to water level. I implemented a landscape reshaping algorithm that gradually reset terrain to water level, creating a believable natural process of erosion and submersion. The control scheme matched the NeoTrellis M4 board used as the input device, with each of the 24 buttons corresponding to a point in the landscape grid.

For visualization, I used satellite imagery from San Francisco—the actual SOMArts neighborhood—as textures, creating layers representing different elevation zones from water to beach, forest, and mountains. This choice created an "uncanny reflection" of the familiar SOMArts neighborhood that felt both recognizable and digitally distorted. The tabletop arcade cabinet with 24-inch diagonal display created an inviting, playful interface that contrasted with the serious underlying message.

The development process addressed several key challenges: providing clear user feedback on the impact of selection through animation and lighting to distinguish direct elevation changes from second-order consequences as the landscape responded, creating an uncanny aesthetic of the familiar neighborhood that felt both recognizable and digitally distorted, effectively communicating the temporary nature of player control through visual and interactive means, and balancing the arcade game's playful form with the serious themes of environmental change and human agency.

My solutions included using smooth animations to show immediate elevation changes with slower transitions showing the landscape's response and eventual erosion, choosing real satellite images from the actual location to create immediate recognition while digital manipulation created the uncanny effect, implementing a progressive reset algorithm where cell states were adjusted based on neighbors to create a believable natural process, and using Three.js efficiently with appropriate update triggers to maintain smooth animations while manipulating many vertices.

The final deliverable was a custom arcade cabinet installation with physical buttons that visitors could press to raise the elevation of onscreen topography. The landscape would respond by reshaping itself—sandy islands would grow and fill with trees, streets, houses, and hills—but this control was inherently temporary. Little islands would build up and then sink back down, and eventually all formations would return to water level. The piece successfully presented an arcade game form that invited playful interaction while conveying the profound message that in an uncertain world, our ability to shape our environment is limited and temporary.
