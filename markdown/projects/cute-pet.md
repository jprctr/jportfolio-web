---
title: Cute Pet
date: 2023-11-17
category: Interactive Art
client: Emerging As We Disappear
industry: Art
link: 
description: Interactive object that asks visitors to share their outlook on the future through a 2D political compass-style interface. Their responses are visualized on screen, and in exchange a fortune-telling cat with a GPU for a face shares cryptic wisdom powered by a local LLM.
---
### Concept
Cute Pet explores perspectives on agency, optimism, the future, and our desire for answers in an uncertain world. The project was created for the "Emerging As We Disappear" exhibition, which featured US-based artists addressing themes of national and personal identity, societal decline, increasing complexity, excess and greed, mental health, superstition, activism, community, and hope. 

### Tech Stack
- JavaScript
- React
- Three.js
- Local LLM (Llama-2 model)

### Requirements & Design
In considering the theme of the exhibition I was particularly concerned with what views on decline our visitors might be bringing with them, and that's what lead to the interaction in it's current form. Physically the piece is taking this device, a GPU, that we ask to solve all kinds of problems, but which is typically hidden away somewhere, and placing it face to face with the viewer. Embodying the interaction as a conversation with this colorful cat character, as well as the use of a 2D political compass style interface was meant to make an appealing first impression and help to quickly convey the premise which is essential in the context of a group show.

### Build & Architecture
The development process involved integrating a local Llama-2 model, creating a persona tuned for a fortune-telling cat voice, building a visual feedback system, and connecting the frontend with the LLM backend. The hardware for the installation was relatively modest so tuning both the local LLM and 3d visualization of visitor's responses for performance was essential to minimize latency and keep everything feeling snappy for the user.

### Delivery & Impact
An interactive object, styled as a feline oracle with a GPU for a face, installed at the Emerging As We Disappear show. Cute Pet asks visitors to share their outlook on the future across 2 dimensions; optimism and agency. Their responses are visualized on screen, and in exchange, the oracle shares cryptic, sometimes humorous, words of wisdom. The piece engaged gallery visitors in reflection about societal decline while capturing and reflecting back data on visitor perspectives.
