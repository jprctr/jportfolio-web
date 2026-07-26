---
title: The Artist's Way
date: 2022-11-05
category: Installation
client: Lemmerman Gallery, New Jersey City University
industry: Art
link: 
description: An audiovisual exploration that critiques the role of language in the contemporary art ecosystem by parsing over 400 artists' statements into poetic phrases and visualizing their conceptual relationships in an immersive 3D network installation.
---
## The Artist's Way

### Brief
Critique the role of language in the contemporary art ecosystem, from gallery wall text to press releases to funding organizations to graduate MFA program instruction to artist statements. Create a work that reveals patterns in how artists describe themselves and how this language shapes our engagement with art.

### Tech Stack
- JavaScript
- React (state management, phrase selection, display styles)
- Three.js (3D scene rendering)
- React-Three-Fiber (integration of React and Three.js)
- Tone.js (generative audio by Andrew Demirjian)
- VOSviewer (analysis of artists' statements for network extraction)

### Design Process
1. **Data Analysis Phase**: Used VOSviewer to analyze over 400 artists' statements, extracting key concepts and mapping their co-occurrence relationships to create a network of nodes and links.
2. **Prototype Development**: Created iterative prototypes sharing visual and parsing approaches with collaborator Andrew, exploring various ways to represent the network poetically.
3. **Conceptual Development**: Recognized that the collection of concepts and their connections resembled a landscape, leading to the development of camera movement techniques to navigate this "conceptual landscape."
4. **Parsing Rule Development**: Developed custom generative rules including alphabetical sentence rearrangement, extraction of aphorisms and questions, phrase pattern matching (e.g., 'I + ____', 'my work + ____', 'this + ____'), parts of speech analysis, phonetic similarities, and poetic forms (acrostics, haikus).

## Development Process
1. **Data Pipeline**: Built system to ingest and analyze over 400 artists' statements using VOSviewer, creating the initial network structure with nodes labeled with text and links showing conceptual connections.
2. **Visualization Core**: Implemented the Three.js network visualization with smooth camera control and zoom-out functionality for overview perspectives.
3. **Audio Integration**: Collaborated with Andrew to synchronize generative audio with visual phases using Tone.js, creating distinct sonic experiences for different parsing rules.
4. **Installation Build**: Created two large-scale projection installations—a diptych and a vertical wall—with the vertical wall arranged with gaps to accommodate the gallery's stained glass windows.
5. **Performance Optimization**: Applied iterative testing and refinement to ensure smooth motion and responsive interaction.

## Delivered Result
An audiovisual exploration of over 400 artists' statements, parsed and remixed into poetic phrases according to custom generative rules, installed as two large-scale projections (diptych and vertical wall). Each segment lasts roughly one to two minutes, with some longer phrases created by rearranging sentences alphabetically and excerpts displaying aphorisms and questions. The installation critiques the role of language in the contemporary art ecosystem, inviting viewers to contemplate how words shape our engagement with art while revealing patterns in artists' self-descriptions.

## Summary Narrative
I collaborated with Andrew Demirjian, a generative audio artist, to create "The Artist's Way" for the Lemmerman Gallery at Kean University's Jersey City campus. This project critiques the role of language in the contemporary art ecosystem—from gallery wall text and press releases to funding organizations and graduate MFA program instruction to artist statements themselves—by revealing patterns in how artists describe themselves and how this language shapes our engagement with art. Using VOSviewer to analyze over 400 artists' statements, I extracted key concepts and mapped their co-occurrence relationships to create a 3D network visualization in Three.js. The installation features custom generative parsing rules including alphabetical sentence rearrangement, extraction of aphorisms and questions, phrase pattern matching, parts of speech analysis, phonetic similarities, and poetic forms like acrostics and haikus. I implemented adaptive camera movement algorithms that smoothly navigate this conceptual landscape while keeping selected elements in view, built React-based state management for phrase selection and display styles, and synchronized generative audio with visual phases. The final deliverable was an immersive audiovisual installation in the dramatic chapel-like space of the Lemmerman Gallery, created as two large-scale projections (diptych and vertical wall with gaps for stained glass windows) that successfully invited viewers to contemplate how the language of art shapes our engagement with it.
