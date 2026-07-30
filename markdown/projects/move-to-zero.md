---
title: Move to Zero Climate and Sport
date: 2019-09-01
category: Data Storytelling
client: Nike
industry: Apparel / Sportswear
link: https://archive.pitchinteractive.com/Nike-Climate-and-Sport/
description: An interactive data visualization experience created for the 2019 Climate Summit in NYC, collaborating with Rhodium Group to showcase current climate conditions and their impact on five different sports (Global Football, Running, Tennis, Snowboarding, and American Football), featuring custom visualizations showing both current impacts on athlete safety and future climate projections.
---

### Need
For the 2019 Climate Summit in NYC, Nike's Social Impact team partnered with Rhodium Group to create an engaging data storytelling experience that would communicate the tangible effects of climate change on athletes globally. The core challenge was making complex climate data accessible and emotionally resonant for the general public, particularly those passionate about sports. The solution needed to highlight how changing weather patterns directly impact athletes' ability to safely practice and play across five major sports: Global Football, Running, Tennis, Snowboarding, and American Football. By connecting climate projections to real-world athletic scenarios, the project aimed to raise awareness about climate change's effects on sport and inspire action toward sustainable solutions.

### Tech Stack
- JavaScript
- React
- React-Spring
- D3
- Scrollama

### Requirements & Design
After collaborating with stakeholders from Nike and Rhodium Group, the team defined key requirements: the visualization needed to cover five distinct sports, each with unique climate challenges, while maintaining a cohesive narrative experience. Design focused on selecting distinct chart types tailored to each sport's specific climate vulnerabilities; mapping sub-freezing days for Snowboarding's mountain ranges and using choropleth maps for American Football to show heat-related game cancellations. The narrative structure was designed to balance rich underlying datasets with clear, readable information that would scale effectively across all screen sizes. Quotes from prominent athletes in each sport were integrated throughout to add human perspective and emotional resonance, ensuring the data felt personal and impactful rather than abstract.

### Build & Architecture
The development process prioritized performance and smooth user experience across both mobile and desktop platforms. The team implemented scroll-linked animations using React-Spring and Scrollama, carefully managing scroll events to maintain consistent 60fps performance throughout the interactive experience. A significant focus was placed on handling multiple datasets efficiently without compromising animation smoothness or visual clarity. The architecture leveraged D3 for data visualization capabilities while React provided a component-based structure that enabled modular development across the five sport sections.

### Delivery & Impact
The delivered result was a compelling interactive experience that illustrated the current and projected effects of climate change on athletes worldwide across five sports. By combining custom data visualizations with athlete quotes and scroll-driven narrative flow, the project successfully communicated complex climate information in an accessible and emotionally engaging way. The experience demonstrated how changing climate conditions affect an athlete's ability to safely practice and play, showing both current impacts and future projections if climate severity continues without intervention. This narrative approach not only raised awareness about climate change's tangible effects on sport but also aligned with Nike's broader mission to inspire sustainable action, ultimately delivering a powerful tool for the 2019 Climate Summit that connected global environmental challenges to the universal language of athletics.
