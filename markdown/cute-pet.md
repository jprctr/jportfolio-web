# Project: Cute Pet

## Client
- **Name**: Emerging As We Disappear (popup group show at Astor Center, NYC)
- **Industry**: Contemporary Art / Media Art Exhibition
- **Link**: https://partiful.com/e/UDy5Rt1L14RMMF5s6qWe, https://jamesaproctor.com/cutepet

## Brief
Perspectives around today’s American Societal Decline. This group art show features US based artists covering a range of topics like national and personal  identity, increasing complexity, excess & greed, the military industrial complex, mental health, superstition, activism, resistance, community, and hope.

## Stakeholders
- **Curator**: Karen DeMaio Weber (Central Saint Martins Arts & Cultural Enterprise Masters dissertation)
- **Venue**: Astor Center, NYC
- **Exhibition**: Emerging As We Disappear

## Team Members
- Myself 

## My Role
Full-stack developer and artist responsible for:
- Designing the interactive input interface (2D political compass-style political compass)
- Implementing the fortune-telling oracle dialogue system
- Creating the visual feedback system for visitor responses
- Integrating a local LLM with custom persona tuning
- Building the complete web-based installation

## Audience
Gallery visitors and art exhibition attendees interested in contemporary media art exploring themes of societal decline, identity, mental health, and future outlook.

## Design Process, Challenges, Solutions

### Design Process
1. **Concept Development**: Created an interactive oracle character (a friendly cat GPU) that responds to visitors' views on the future with cryptic commentary, inspired by the Magic 8 Ball format but more conversational.

2. **Input Interface Design**: Implemented a 2D input system resembling a political compass, allowing visitors to express their outlook on society in two dimensions, enabling analysis of correlations between outlook and sense of agency.

3. **Visual Design**: Decided to place a GPU (typically hidden away) face-to-face with viewers, creating an engaging physical object that serves as the oracle's medium.

### Design Challenges
- **Engagement**: Creating an appealing first impression that quickly conveys the premise while remaining intriguing enough to invite interaction.
- **Clarity**: Making interface elements clearly interactive and inviting to touch, ensuring visitors understand how to engage with the piece immediately.
- **Dual Analysis**: Designing an input system that captures both the viewer's outlook on the future AND their sense of agency, allowing for correlation analysis between these two dimensions.

### Solutions
- **Visual Appeal**: Used a friendly cat GPU as the central visual element, creating immediate emotional connection while conveying the technological theme.
- **Intuitive Interface**: Designed clear, readable copy and obvious interactive elements with inviting visual feedback.
- **Two-Dimensional Input**: The political compass-style interface naturally captured both outlook and agency in a single interaction.

## Tech Stack
- JavaScript
- React
- Three.js (for 3D rendering of the GPU/oracle character)
- Local LLM (Llama-2 model)

## Development Process, Challenges, Solutions

### Development Process
1. **Local LLM Integration**: Implemented a local Llama-2 model running on the exhibition hardware.
2. **Persona Tuning**: Created a system prompt defining the AI's persona as a fortune-telling cat, with constraints on output length and style.
3. **Visual Feedback System**: Built a system to visualize visitor responses on screen while the oracle delivers its wisdom.
4. **Integration**: Connected the frontend web application with the local LLM backend.

### Development Challenges
- **Local LLM Integration**: Running and managing a local LLM within the constraints of exhibition hardware while maintaining responsive interactions.
- **Persona Consistency**: Ensuring the AI consistently delivered outputs in the voice of a fortune-telling cat across varied user inputs.
- **Performance**: Balancing the computational requirements of running a local LLM with smooth, responsive user interactions.

### Solutions
- **Model Selection**: Chose Llama-2 for its balance of capability and hardware requirements.
- **System Prompt Engineering**: Developed a detailed system prompt describing the fortune-telling cat persona with specific constraints on tone, length, and style.
- **Output Controls**: Implemented settings to limit output length and maintain consistency in the oracle's voice.
- **Efficient Integration**: Designed the integration to minimize latency between user input and oracle response.

## Delivered Result
An interactive object installed at the Emerging As We Disappear show that asks visitors to share their outlook on the future. Their responses are visualized on screen, and in exchange, the oracle shares words of wisdom. The piece successfully engaged gallery visitors in reflection about societal decline while capturing data on visitor perspectives through the two-dimensional input system.

---

## Consolidated Narrative

As a solo developer and artist, I created Cute Pet for the "Emerging As We Disappear" group show at the Astor Center in NYC, curated by Karen DeMaio Weber as part of her Central Saint Martins Arts & Cultural Enterprise Masters dissertation. The exhibition brought together US-based artists exploring themes of national and personal identity, increasing complexity, excess and greed, the military industrial complex, mental health, superstition, activism, resistance, community, and hope.

Cute Pet was designed as an interactive oracle character—a friendly GPU cat face-to-face with viewers—that responds to visitors' views on the future with cryptic commentary, inspired by the Magic 8 Ball format but more conversational. I was responsible for designing the interactive input interface featuring a 2D political compass-style system that allowed visitors to express their outlook on society across two dimensions: their view of the future and their sense of agency. This dual-axis design enabled correlation analysis between outlook and sense of agency among gallery visitors.

The development process required integrating a local Llama-2 model running on exhibition hardware, implementing persona tuning to create a fortune-telling cat voice with constraints on output length and style, building a visual feedback system to display visitor responses, and connecting the frontend web application with the local LLM backend. I addressed key challenges including creating an appealing first impression, ensuring interface elements were clearly interactive and inviting to touch, and balancing the computational requirements of running a local LLM with smooth, responsive user interactions.

The final deliverable was a complete web-based installation featuring a 3D-rendered GPU cat oracle that engaged visitors through intuitive, readable copy and obvious interactive elements. The piece successfully combined emotional connection through the friendly cat visual with technological themes, while the two-dimensional political compass interface naturally captured both outlook and agency in a single interaction. The installation invited gallery visitors to reflect on societal decline while capturing valuable data on visitor perspectives, successfully blending art, technology, and interactive engagement.

