---
title: The Artist's Way
date: 2022-11-05
category: Art Installation
client: Lemmerman Gallery, New Jersey City University
industry: Art
link: 
description: An audiovisual exploration that critiques the role of language in the contemporary art ecosystem by parsing over 400 artists' statements into poetic phrases and visualizing their conceptual relationships in an immersive 3D network installation.
---

### Concept
The project examines how language permeates the contemporary art ecosystem, investigating patterns in how artists articulate their practices and how this framing influences audience engagement. By analyzing over 400 artists' statements alongside gallery texts, press releases, funding materials, and MFA curriculum, the work reveals the linguistic conventions that shape artistic self-representation and public perception. The installation transforms these collected narratives into poetic form, exposing both the richness of artistic expression and the constraints imposed by institutional discourse. Through generative parsing techniques—including alphabetical sentence rearrangement, aphorism extraction, pattern matching, parts of speech analysis, phonetic similarities, and poetic structures like acrostics and haikus—the work creates new poetic combinations that invite contemplation of how language itself constructs our relationship with art. 

### Tech Stack
- JavaScript
- React (state management, phrase selection, display styles)
- Three.js (3D scene rendering)
- React-Three-Fiber (integration of React and Three.js)
- Tone.js (generative audio by Andrew Demirjian)
- VOSviewer (analysis of artists' statements for network extraction)

### Requirements & Design
The project emerged from a critical inquiry into how language functions within the contemporary art ecosystem, requiring a methodology that could systematically analyze and transform the linguistic patterns found across multiple institutional contexts. Working with collaborator Andrew Demirjian, the design process began with data analysis using VOSviewer to process over 400 artists' statements, extracting key concepts and mapping their co-occurrence relationships to establish a foundation of conceptual connections. The design evolved through iterative prototyping, exploring various generative parsing approaches that would transform raw statement material into poetic form. Custom rules were developed including alphabetical sentence rearrangement, extraction of aphorisms and questions, phrase pattern matching (such as 'I + ____', 'my work + ____', 'this + ____'), parts of speech analysis, phonetic similarities, and poetic structures like acrostics and haikus. 

### Build & Architecture
The conceptual framework treats the network of artistic ideas as a landscape to be navigated, with adaptive camera movement allowing viewers to explore the interconnectedness of artistic concepts while remaining oriented to selected elements of interest. The accompanying generative audio by Andrew Demirjian provides distinct sonic experiences for different parsing approaches, deepening the multi-sensory engagement with these patterns of self-description. Ultimately, the piece invites audiences to reflect on how the vocabulary and rhetoric of the art world shape our understanding of artistic practice and identity. Technical implementation leverages VOSviewer for network extraction, Three.js for 3D scene rendering, React-Three-Fiber for React-Three.js integration, React for state management and display styling, and Tone.js for audio synchronization.

### Delivery & Impact
An audiovisual exploration of over 400 artists' statements, parsed and remixed into poetic phrases according to custom generative rules. The installation was realized as two large-scale projection formats; a diptych and a vertical wall installation with intentional gaps to accommodate the gallery's stained glass windows. Installed in the dramatic chapel-like space of the Lemmerman Gallery at Kean University's Jersey City campus. Each segment presents poetic phrases lasting roughly one to two minutes, with some longer phrases created by rearranging sentences alphabetically and excerpts displaying aphorisms and questions. The installation critiques the role of language in the contemporary art ecosystem, inviting viewers to contemplate how words shape our engagement with art while revealing patterns in artists' self-descriptions.
