# Project: The Artist's Way

## Client
- **Name**: Lemmerman Gallery, Jersey City University (Kean University)
- **Industry**: Contemporary Art / Digital Media Art Exhibition
- **Link**: https://www.kean.edu/jersey-city, https://www.andrewdemirjian.com/the-artists-way

## Brief
Critique the role of language in the contemporary art ecosystem, from gallery wall text to press releases to funding organizations to graduate MFA program instruction to artist statements. Create a work that reveals patterns in how artists describe themselves and how this language shapes our engagement with art.

## Stakeholders
- **Curator/Exhibitor**: Lemmerman Gallery
- **Institution**: Kean University, Jersey City
- **Artist Collaborator**: Andrew Demirjian (generative audio)
- **Creator**: James Proctor (3D visuals and network visualization)

## Team Members
- James Proctor (3D visuals, network visualization, camera movement algorithms)
- Andrew Demirjian (generative audio)

## My Role
Full-stack developer and artist responsible for:
- Creating the 3D network visualization using Three.js to represent conceptual relationships between topics extracted from artists' statements
- Implementing camera movement algorithms that smoothly animate between word selections and overview views
- Managing performance optimization through instancing and selective updates
- Developing the generative parsing system that creates poetic phrases from artist statement language
- Building the React-based state management for phrase selection and display styles

## Audience
Art exhibition attendees, digital media practitioners, and contemporary art viewers interested in institutional critique, the role of language in art, and generative art systems.

## Design Process, Challenges, Solutions

### Design Process
1. **Data Analysis Phase**: Used VOSviewer to analyze over 400 artists' statements, extracting key concepts and mapping their co-occurrence relationships to create a network of nodes and links.

2. **Prototype Development**: Created iterative prototypes sharing visual and parsing approaches with collaborator Andrew, exploring various ways to represent the network poetically.

3. **Conceptual Development**: Recognized that the collection of concepts and their connections resembled a landscape, leading to the development of camera movement techniques to navigate this "conceptual landscape."

4. **Parsing Rule Development**: Developed custom generative rules including:
   - Alphabetical sentence rearrangement
   - Extraction of aphorisms and questions
   - Phrase pattern matching (e.g., 'I + ____', 'my work + ____', 'this + ____')
   - Parts of speech analysis
   - Phonetic similarities
   - Poetic forms (acrostics, haikus)

### Design Challenges
- **Abstract Relationships**: Conveying abstract conceptual relationships between words and phrases in 3D space while maintaining clarity and poetic impact.
- **Visual Distinction**: Visually distinguishing different phases with distinct generation rules by using colors, camera movement, and text formatting.
- **Text Legibility**: Ensuring text remained readable at various distances and viewing angles within the large-scale installation.
- **Camera Path Planning**: Timing and easing camera motions to avoid abrupt or dizzying movements while keeping selected elements of the current phrase in view.

### Solutions
- **3D Network Visualization**: Used Three.js to create an immersive network where nodes represent concepts and links show conceptual connections.
- **Adaptive Camera Movement**: Implemented bounding box calculations to determine camera direction of focus and movement path from one area to another, ensuring selected words remain visible during transitions.
- **Optimized Rendering**: Limited updates to elements that actually change (e.g., links were created once and never updated), significantly improving performance.
- **Visual Coding**: Used distinct colors and formatting to differentiate between different parsing phases and rule sets.

## Tech Stack
- JavaScript
- React (state management, phrase selection, display styles)
- Three.js (3D scene rendering)
- React-Three-Fiber (integration of React and Three.js)
- Tone.js (generative audio by Andrew Demirjian)
- VOSviewer (analysis of artists' statements for network extraction)

## Development Process, Challenges, Solutions

### Development Process
1. **Data Pipeline**: Built system to ingest and analyze over 400 artists' statements using VOSviewer, creating the initial network structure.

2. **Visualization Core**: Implemented the Three.js network visualization with nodes labeled with text and links showing conceptual connections.

3. **Camera System**: Developed camera smoothing algorithms that animate into new positions to keep selected words in view, and zoom-out functionality for overview views.

4. **Audio Integration**: Collaborated with Andrew to synchronize generative audio with visual phases.

5. **Installation Build**: Created two large-scale projection installations (diptych and vertical wall) with the vertical wall arranged with gaps to accommodate stained glass windows.

### Development Challenges
- **Performance Optimization**: Keeping motion smooth without hitches or stutters when hundreds of circles and lines are on screen (particularly when camera pulls out in the diptych).
- **Camera Focus**: Maintaining visibility of selected elements while moving through dense 3D space.
- **Synchronization**: Coordinating audio-visual phases with distinct generative rules.
- **Space Constraints**: Working within the dramatic chapel-like space of the gallery while accommodating architectural features like stained glass windows.

### Solutions
- **Instancing**: Used Three.js instancing to render multiple elements efficiently.
- **Selective Updates**: Limited what elements update (e.g., links created once and never change), dramatically improving performance.
- **Bounding Box Calculations**: Used spatial calculations to determine optimal camera focus and movement paths.
- **Iterative Prototyping**: Shared prototypes and sketches with collaborator to refine both visual and parsing approaches over several months.

## Delivered Result
An audiovisual exploration of over 400 artists' statements, parsed and remixed into poetic phrases according to custom generative rules, installed as two large-scale projections (diptych and vertical wall). Each segment lasts roughly one to two minutes, with some longer phrases created by rearranging sentences alphabetically and excerpts displaying aphorisms and questions. The installation critiques the role of language in the contemporary art ecosystem, inviting viewers to contemplate how words shape our engagement with art while revealing patterns in artists' self-descriptions.

---

## Consolidated Narrative

I collaborated with Andrew Demirjian, a generative audio artist, to create "The Artist's Way" for the Lemmerman Gallery at Kean University's Jersey City campus. Curated by the Lemmerman Gallery, this project was designed to critique the role of language in the contemporary art ecosystem—from gallery wall text and press releases to funding organizations and graduate MFA program instruction to artist statements themselves. The goal was to reveal patterns in how artists describe themselves and how this language shapes our engagement with art.

My role encompassed full-stack development and artistic direction, creating a 3D network visualization using Three.js to represent conceptual relationships between topics extracted from 400+ artists' statements. I used VOSviewer to analyze the statements, extracting key concepts and mapping their co-occurrence relationships to create a network of nodes and links. I then implemented camera movement algorithms that smoothly animate between word selections and overview views, and managed performance optimization through instancing and selective updates.

The generative parsing system I developed created poetic phrases from artist statement language through custom rules including alphabetical sentence rearrangement, extraction of aphorisms and questions, phrase pattern matching (such as 'I + ____', 'my work + ____', 'this + ____'), parts of speech analysis, phonetic similarities, and poetic forms like acrostics and haikus. I also built the React-based state management for phrase selection and display styles, and collaborated with Andrew to synchronize generative audio with visual phases using Tone.js.

The development process required addressing several complex challenges: conveying abstract conceptual relationships between words and phrases in 3D space while maintaining clarity and poetic impact, visually distinguishing different phases with distinct generation rules through colors, camera movement, and text formatting, ensuring text legibility at various distances and viewing angles within the large-scale installation, and timing and easing camera motions to avoid abrupt or dizzying movements while keeping selected elements in view.

Our solutions included using Three.js instancing to render multiple elements efficiently, limiting updates to elements that actually changed (such as links created once and never updated) to dramatically improve performance, using spatial bounding box calculations to determine optimal camera focus and movement paths, and iterative prototyping where we shared prototypes and sketches with Andrew to refine both visual and parsing approaches over several months. We created two large-scale projection installations—a diptych and a vertical wall—arranged with gaps in the vertical wall to accommodate the gallery's stained glass windows.

The final deliverable was an immersive audiovisual installation installed in the dramatic chapel-like space of the Lemmerman Gallery, where visitors could navigate a conceptual landscape of artists' statements through smooth camera movements, experiencing poetic remixes of the language that shapes the art world. The piece successfully critiqued the role of language in the contemporary art ecosystem while revealing patterns in how artists describe themselves, inviting viewers to contemplate how words shape our engagement with art.
