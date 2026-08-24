---
title: Center for Analytics Modeling and Performance (CAMP)
date: 2023-08-01
category: Business Intelligence
client: Hospital for Special Surgery
industry: Healthcare
link: 
description: Enterprise analytics environment built for the Center for Analytics, Modeling & Performance team's new dedicated workspace. The platform supports the hospital's analytics team with interactive views of facility capacity, operating and waiting room status, provider networks, and service demand.
---
### Need
The Hospital for Special Surgery wanted to create custom exploratory and status visualizations for their new Center for Analytics, Modeling & Performance workspace. The system would support hospital staff in monitoring facility operations, provider networks, service activity, waiting and operating room capacity, and complex patient journeys. The platform needed to display large volumes of operational and geographic data while remaining clear, responsive, and useful at a glance.

### Tech Stack
- Visualization: Deck.gl (Basemap, heatmap, 3D rendering), D3
- Framework: React
- Technologies: JavaScript, HTML, CSS, AWS, GraphQL APIs

### Requirements & Design
Worked with HSS’s Executive Director of CAMP, Chief Analytics Officer, analytics team, and workspace architects to define the purpose and interaction model for each visualization. Participated in on-site interviews to understand how the displays would be used within the physical workspace. Large-screen readability was addressed by increasing type and interface scale, simplifying controls, and giving each visualization a defined operational purpose with expandable detail. Interactive maps required smooth navigation across clusters of facilities and service areas, so automatic map-positioning and smoothing behaviors were introduced. Rendering performance was another major challenge: D3 visualizations used precalculated positions and canvas rather than SVG, while deck.gl layers were carefully configured to prevent unnecessary updates and maintain responsive interaction.

### Build & Architecture
Led development of the visualization architecture and selected deck.gl for its geospatial rendering and performance capabilities. Built interactive provider maps, heat maps, facility status views, and department-level service summaries using React, D3.js, and deck.gl. Developed performance-optimized 2D visualizations by precalculating positions and rendering to canvas, and managed deck.gl update triggers at the layer level to avoid unnecessary rerendering. Also contributed algorithms for identifying and representing complex patient journeys, reviewed code from contributing developers, and worked closely with the design team to iterate across exploratory prototypes and production-ready visualizations.

### Delivery & Impact
Delivered an interactive analytics environment for HSS’s CAMP workspace, including provider-network maps, facility-use status boards, capacity KPIs, department-level service summaries, and patient-journey visualizations. The project exceeded acceptance criteria and received positive feedback from the CAMP team. The resulting platform helped transform complex operational data into an engaging, high-performance experience supporting awareness, analysis, and better-quality care across HSS’s multibillion-dollar healthcare operations.
