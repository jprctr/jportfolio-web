---
title: Center for Analytics Modeling and Performance (CAMP)
date: 2023-08-01
category: Business Intelligence
client: Hospital for Special Surgery
industry: Healthcare
link: 
description: Built an enterprise-wide KPI-centered dashboard and interactive data analytics center of excellence for CAMP at Hospital for Special Surgery, featuring operational excellence visualizations, hospital network monitoring with heat maps and 3D flyover views, and a patient journey storyteller component to support $2.1B in annual operations and better quality care for 200,000+ patients annually.
---
## Center for Analytics Modeling and Performance (CAMP)

### Brief
Build an enterprise-wide KPI-centered dashboard and interactive data analytics center of excellence for the CAMP team at Hospital for Special Surgery. The project included an operational excellence data analytics center with touchscreens, hospital and provider network monitoring with heat maps and 3D flyover views, and a patient journey storyteller feature. The goal was to create advanced data analytics and awareness supporting better quality care and $2.1B in annual operations.

### Tech Stack
- **Visualization**: Deck.gl (Basemap, heatmap, 3D rendering), D3
- **Framework**: React
- **Technologies**: JavaScript, HTML, CSS, AWS, custom data APIs

### Design Process
1. Conducted on-site workshops with CAMP team and workspace architects to gather feedback and understand user needs
2. Addressed challenges with large touch display readability by scaling up type and interface elements
3. Implemented automatic smoothing for complex actions like map zooming to enhance usability
4. Defined clear purposes for each visualization with expandable detail views to balance aesthetics with practical usefulness
5. Created an interactive data analytics center of excellence that incites delight while maintaining the gravity of elite healthcare delivery

### Development Process
- Architected solution using deck.gl (choosen for geospatial and performance features)
- For 2D visuals using D3: precalculated positions and drew to canvas rather than SVG
- Carefully managed deck.gl's updateTriggers for each layer to prevent unnecessary renders

### Delivered Result
Exploratory and status visualizations for HSS's data analytics workspace, including interactive maps of associated providers, facility usage status board with KPIs (waiting and operating room capacity and status by facility and department), and department-level summaries of services. The project exceeded acceptance criteria with positive feedback, supporting better quality care for HSS's more than 200,000 patients treated annually.

### Summary Narrative
As lead developer at Two-N, I led the development of CAMP (Center for Analytics Modeling and Performance) for Hospital for Special Surgery, creating exploratory and status visualizations for their data analytics and performance modeling group. I worked directly with the Executive Director of CAMP, the Chief Analytics Officer, alongside a junior engineer, our design director and project manager. My responsibilities included architecting the deck.gl visualization solution, developing performance-optimized 2D visualizations using D3, managing and reviewing code contributions from a junior developer, and contributing to the patient journey storyteller component with algorithm development for identifying complex patient journeys. I partnered with our design director and junior engineer to rapidly experiment with and prototype 3D and 2D experiences. Our design process emphasized user-centered development, ensuring our visualizations reflected user needs and fit seamlessly into their new workspace. We balanced eye-catching aesthetics with practical usefulness by defining clear purposes for each visualization and enabling detailed views when users interacted with the content. On the technical side, we optimized performance for data and rendering-heavy applications, carefully managing updateTriggers for each layer to prevent unnecessary renders. The final deliverable included an interactive data analytics center of excellence displayed on touchscreens, featuring visualizations that incite delight while maintaining the gravity and importance of elite healthcare delivery and operational excellence. The project exceeded acceptance criteria with positive feedback from the CAMP team, supporting better quality care for HSS's more than 200,000 patients treated annually.
