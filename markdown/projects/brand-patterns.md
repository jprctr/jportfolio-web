---
title: Brand Patterns
date: 2025-09-01
category: Market Intelligence
client: UM (Universal McCann)
industry: Advertising
link: 
description: A streamlined web application enabling UM agency teams to create custom visualizations for clients based on their proprietary Brand Patterns model. Allows teams to select clients, competitors, and audiences, translates those selections into YouGov API queries, processes the results through the Brand Patterns model, and generates client-ready visualizations viewable online or exported as static images.
---
### Need
Universal McCann wanted to transform their proprietary Brand Patterns model from a manual, script-based analysis tool into an interactive web application that could serve clients with professional-grade visualizations. Agency teams needed to be able to select specific clients, competitors, and target audiences, and have them be automatically translated into YouGov API queries, which would then be processed by the agency's proprietary Brand Patterns model and transformed into client-ready visualization outputs. The tool needed to support both online viewing and export as static images, accommodating various client presentation formats while maintaining statistical rigor and data integrity throughout the analysis pipeline.

### Tech Stack
- Front-end: TypeScript, Next.js, React, Redux, D3, TailwindCSS
- Analysis Service: R, Plumber, Docker
- Database: MySQL with Sequelize

### Requirements & Design
Collaborating with UM's Chief Product Officer, Brand Patterns model analysts, and their DevOps team, the design process centered on simplifying an inherently complex data analysis workflow while preserving analytical rigor. Requirements emerged from three key areas: first, creating an intuitive interface that allowed teams to select clients, competitors, and audiences without risking statistically invalid combinations; second, ensuring visualizations remained readable and impactful even when comparing multiple data points; third, balancing the interactive web experience with static export capabilities for client presentations.

### Build & Architecture
The development phase addressed two primary challenges: optimizing a complex network visualization for brand conversion propensity data, and encapsulating analysts' manually-run R scripts into a production-ready service. To solve the visualization challenge, an algorithmic layout approach was implemented to minimize link and label overlaps in the network graph. For the data processing layer, the plumber library was used to  created RESTful endpoints that wrapped existing R analysis scripts, enabling seamless data processing and structured output without disrupting analysts' established workflows. The entire analysis service was containerized using Docker, ensuring consistent environment integration across development, testing, and production, while Sequelize managed MySQL database operations for queries and data retrieval.

### Delivery & Impact
The delivered result is a Next.js web application that empowers UM's client teams to create radar and bar charts of comparative brand sentiment based on YouGov data for customizable audiences, combined with advanced analysis outputs visualized as an interactive network diagram. This comprehensive tool has become an essential asset for UM's client teams, enabling data-driven insights and professional-quality visualizations that support their strategic client presentations and decision-making processes. The application seamlessly integrates the agency's proprietary Brand Patterns model with modern web technologies, delivering both the analytical depth required for sophisticated market intelligence and the visual presentation capabilities needed for client-facing deliverables.
