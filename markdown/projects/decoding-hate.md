---
title: Decoding Hate
date: 2021-05-01
category: Data Storytelling
client: The Asian American Foundation
industry: Nonprofit
link: https://decodinghate.taaf.org/
description: Decoding Hate visualizes the unprecedented amount of hate incidents targeting the AAPI community during the COVID-19 pandemic through a scrolling narrative and interactive timeline of 3D fragments, helping raise awareness about anti-Asian hate and encourage support for affected individuals.
---
### Brief
Visualize the unprecedented amount of hate incidents targeting the AAPI community during the COVID-19 pandemic. The project needed to capture hate incidents reported by news organizations and social media users to convey the magnitude and scope of the crisis. The experience should help shed light on various attributes including location, victim gender, and whether incidents were COVID-related, while raising awareness and encouraging support for those affected.

### Tech Stack
- JavaScript
- React
- Three.js
- react-three-fiber
- Tween.js

### Design Process
The design focused on conveying the magnitude of hate incidents through both individual narratives and aggregate analysis. Key challenges included visualizing the overwhelming volume of incidents while also highlighting specific examples, and reflecting the harmful nature of the content through design choices. Solutions included using a harsh angular design for 3D fragments to represent the harmful incidents they depict, creating a flood animation at the start to convey scale, and implementing both a scrolling narrative section for specific examples alongside a categorized timeline for higher-level aggregate analysis. Each statement was given room to breathe in transitions to provide appropriate weight to this serious topic.

### Development Process
The primary technical challenge was maintaining fluid animations and responsive interactions while visualizing thousands of incidents with consistent 60fps performance. Solutions included instanced rendering of 3D elements to optimize rendering performance, throttling scroll events to limit unnecessary re-renders, and extensive selection of specific easing functions to achieve desired animation effects. A mesh surface sampler technique was used to arrange fragments into the shape of title text for the intro sequence.

### Delivered Result
Guided scrolling narrative and interactive timeline of anti-Asian hate incidents as reported by news organizations and social media users, visualized as a torrent of 3D fragments. The experience helps shed light on various attributes of each incident, including location, victim gender, and whether the incident was COVID-related.

### Summary Narrative
During the midst of the COVID-19 pandemic, the team at Pitch Interactive was selected by The Asian American Foundation to help visualize the unprecedented amount of hate incidents targeting the AAPI community. The project, titled Decoding Hate, created a scrolling narrative and interactive timeline visualizing hate incidents as reported by news organizations and social media users, displayed as a torrent of 3D fragments. I worked alongside another developer on this project, with my colleague primarily focused on the timeline element while I was mainly responsible for the scrolling narrative portion. We created the 3D fragments using Three.js, integrating them with react-three-fiber and using Tween.js to create refined and smooth animations. Interface elements and text were created with React, and I optimized performance to maintain consistent 60fps through element instancing and scroll event throttling. The project's audience was the general public, with the goal of raising awareness of the seriousness of anti-Asian hate and encouraging support for those affected. The experience was designed to convey the magnitude of hate incidents through a flood animation at the start, while allowing viewers to explore every fragment categorized by the types of hate incidents described in the tweet or news report chronologically from the start of the pandemic to present. The final deliverable was a guided scrolling narrative and interactive timeline that effectively visualized anti-Asian hate incidents, with the 3D fragments representing each hate incident and displaying various attributes including location (businesses had the highest), victim gender (if known), and whether the incident was COVID-related. The experience helped shed light on the scope and nature of the crisis, providing viewers with both an emotional connection through specific narratives and analytical understanding through the categorized timeline.
