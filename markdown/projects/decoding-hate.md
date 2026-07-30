---
title: Decoding Hate
date: 2021-05-01
category: Data Storytelling
client: The Asian American Foundation
industry: Nonprofit
link: https://decodinghate.taaf.org/
description: Visualizes the unprecedented amount of hate incidents targeting the AAPI community during the COVID-19 pandemic through a scrolling narrative and interactive timeline of 3D fragments, helping raise awareness about anti-Asian hate and encourage support for affected individuals.
---
### Need
The Asian American Foundation collected thousands of reports from news organizations and social media users documenting hate incidents targeting the AAPI community during the COVID-19 pandemic in order to raise awareness and encourage support for affected individuals and communities. My team at Pitch Interactive was tasked with conveying the overwhelming scope of the crisis while highlighting specific narratives and key attributes of each incident. 

### Tech Stack
- JavaScript
- React
- Three.js
- react-three-fiber
- Tween.js

### Requirements & Design
The design process focused on conveying the magnitude of hate incidents through both individual narratives and aggregate analysis, with the goal of visualizing the overwhelming volume of incidents while also highlighting specific examples and reflecting their damaging nature through appropriate design choices. We chose harsh angular design for 3D fragments to represent the harmful incidents they depict, beginning the experience by transitioning in a torrent of fragments to convey the scale of the crisis, and implementing both a scrolling narrative section to foreground specific examples, alongside a categorized timeline for higher-level aggregate analysis.

### Build & Architecture
The development process centered on maintaining fluid animations and responsive interactions while visualizing thousands of incidents with consistent 60fps performance, which required thoughtful optimization. I collaborated with another developer who primarily focused on the timeline element while I took responsibility for the scrolling narrative portion. We implemented instanced rendering of 3D elements to optimize rendering performance for thousands of fragments, throttled scroll events to limit unnecessary re-renders, and extensively tested various easing functions to achieve the desired animation effects. A mesh surface sampler technique was used to arrange fragments into the shape of title text for the intro sequence, creating a visually impactful introduction that sets the tone for the experience.

### Delivery & Impact
The final deliverable is a scrolling narrative and interactive timeline of anti-Asian hate incidents as reported by news organizations and social media users, visualized as a torrent of 3D fragments that conveys both the emotional weight and analytical scope of the crisis. The experience allows viewers to explore each incident categorized by type, with each fragment displaying various attributes including location, victim gender when known, and whether the incident could be identified as explicitly COVID-related. By balancing an emotional perspective highlighting specific incidents with a broader analytical perspective through the categorized timeline the project provides the general public with deeper awareness of the seriousness of the rise of anti-Asian hate during the COVID-19 pandemic.
