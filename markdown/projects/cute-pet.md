---
title: Cute Pet
date: 2023-11-17
category: Interactive Installation
client: Emerging As We Disappear
industry: Art
link: 
description: Cute Pet is an interactive oracle installation where visitors share their outlook on the future through a 2D political compass-style interface, while a fortune-telling GPU cat oracle responds with cryptic wisdom powered by a local LLM.
---
### Brief
Perspectives around today's American Societal Decline. This group art show features US based artists covering a range of topics like national and personal identity, increasing complexity, excess & greed, the military industrial complex, mental health, superstition, activism, resistance, community, and hope.

### Tech Stack
- JavaScript
- React
- Three.js
- Local LLM (Llama-2 model)

### Design Process
The design process focused on creating an engaging, intuitive experience centered around a friendly GPU cat oracle. I conceptualized an interactive oracle character inspired by the Magic 8 Ball format, implemented a 2D political compass-style input system to capture both visitors' outlook on the future and their sense of agency, and designed a visual system placing the GPU face-to-face with viewers. Key challenges included creating an appealing first impression, ensuring clear interactivity, and designing a dual-axis input system. Solutions involved using the friendly cat GPU as a central visual element for emotional connection, implementing clear readable copy with inviting visual feedback, and leveraging the political compass interface to naturally capture both dimensions in a single interaction.

### Development Process
The development process involved integrating a local Llama-2 model, creating persona tuning for a fortune-telling cat voice, building a visual feedback system, and connecting the frontend with the LLM backend. Key challenges included managing the local LLM within hardware constraints, maintaining persona consistency across varied inputs, and balancing computational requirements with responsive interactions. Solutions involved selecting Llama-2 for optimal capability-to-hardware ratio, developing detailed system prompts with specific tone and style constraints, implementing output controls to maintain voice consistency, and designing efficient integration to minimize latency between user input and oracle responses.

### Delivered Result
An interactive object installed at the Emerging As We Disappear show that asks visitors to share their outlook on the future. Their responses are visualized on screen, and in exchange, the oracle shares words of wisdom. The piece successfully engaged gallery visitors in reflection about societal decline while capturing data on visitor perspectives through the two-dimensional input system.

### Summary Narrative
As a solo developer and artist, I created Cute Pet for the "Emerging As We Disappear" group show at the Astor Center in NYC, curated by Karen DeMaio Weber as part of her Central Saint Martins Arts & Cultural Enterprise Masters dissertation. The exhibition brought together US-based artists exploring themes of national and personal identity, increasing complexity, excess and greed, the military industrial complex, mental health, superstition, activism, resistance, community, and hope. Cute Pet was designed as an interactive oracle character—a friendly GPU cat face-to-face with viewers—that responds to visitors' views on the future with cryptic commentary, inspired by the Magic 8 Ball format but more conversational. I was responsible for designing the interactive input interface featuring a 2D political compass-style system that allowed visitors to express their outlook on society across two dimensions: their view of the future and their sense of agency. This dual-axis design enabled correlation analysis between outlook and sense of agency among gallery visitors. The development process required integrating a local Llama-2 model running on exhibition hardware, implementing persona tuning to create a fortune-telling cat voice with constraints on output length and style, building a visual feedback system to display visitor responses, and connecting the frontend web application with the local LLM backend. I addressed key challenges including creating an appealing first impression, ensuring interface elements were clearly interactive and inviting to touch, and balancing the computational requirements of running a local LLM with smooth, responsive user interactions. The final deliverable was a complete web-based installation featuring a 3D-rendered GPU cat oracle that engaged visitors through intuitive, readable copy and obvious interactive elements. The piece successfully combined emotional connection through the friendly cat visual with technological themes, while the two-dimensional political compass interface naturally captured both outlook and agency in a single interaction. The installation invited gallery visitors to reflect on societal decline while capturing valuable data on visitor perspectives, successfully blending art, technology, and interactive engagement.
