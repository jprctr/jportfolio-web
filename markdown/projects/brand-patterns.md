---
title: Brand Patterns
date: 2025-09-01
category: Market Intelligence
client: UM (Universal McCann)
industry: Advertising
link: 
description: A streamlined web application enabling UM agency teams to create custom visualizations for clients based on their proprietary Brand Patterns model, allowing teams to select clients, competitors, and audiences; translate selections into YouGov API queries; process results through the Brand Patterns model; and generate client-ready visualizations viewable online or exported as static images.
---
## Brand Patterns

### Brief
Build a streamlined tool enabling UM agency teams to create custom visualizations for clients based on their proprietary Brand Patterns model. The application needed to allow teams to select clients, competitors, and audiences; translate selections into YouGov API queries; process results through the Brand Patterns model; and generate client-ready visualizations viewable online or exported as static images.

Stakeholders included the Chief Product Officer at UM, analysts who created the Brand Patterns model, and the DevOps team. The project team consisted of a full stack developer (me) and a former Two-N colleague (front-end developer). My role involved converting manually-run R analysis scripts into a web service, managing queries and database operations using MySQL with Sequelize, creating the network visualization component, using the plumber library to handle web requests and route them to data processing functions, and wrapping the analysis service in Docker for consistent environment integration. The target audience was agency teams at UM (Universal McCann) and their external clients.

### Tech Stack
- **Front-end:** TypeScript, Next.js, React, Redux, D3, TailwindCSS
- **Analysis Service:** R, Plumber, Docker
- **Database:** MySQL with Sequelize

### Design Process
The design process focused on streamlining brand and audience selection for complex queries while highlighting selections that could limit statistical validity. A key solution was creating an intuitive selection interface with validation to prevent statistically invalid queries. Another major challenge was designing complex comparisons for readability when exported as static images while providing additional details and options in the interactive web app, which was addressed by implementing a dual-output system with clear visual hierarchy.

### Development Process
The development process involved two core challenges: arranging a complex network visualization to minimize link and label overlaps, and building a service to encapsulate analysts' manually-run scripts into an internal service for data processing and structured analysis output. The solution involved implementing an algorithmic layout approach to optimize network graph positioning and using the plumber library to create RESTful endpoints wrapping R scripts, with Docker for environment consistency.

### Delivered Result
A Next.js web application that allows client teams to create radar and bar charts of comparative brand sentiment based on YouGov data for customizable audiences, with advanced analysis based on an internal conversion propensity model visualized as a network diagram.

### Summary Narrative
As a freelancer, I collaborated with a former colleague from Two-N to build Brand Patterns for UM (Universal McCann), a streamlined tool enabling agency teams to create custom visualizations based on the agency's proprietary Brand Patterns model. Our selection stemmed from our successful delivery of a similar tool for sister agency Initiative and our established working relationships with their shared technical infrastructure. The application required teams to select clients, competitors, and audiences, translate those selections into YouGov API queries, process results through our custom analysis service running the proprietary Brand Patterns model, and generate client-ready visualizations. I took responsibility for full stack development, converting analysts' manually-run R scripts into a web service using the plumber library, managing MySQL database operations with Sequelize, and creating a complex network visualization. Our colleague focused on front-end development, building the project configuration UI and radar/bar visualizations. The final deliverable is a Next.js web application featuring radar and bar charts of comparative brand sentiment based on YouGov data for customizable audiences, combined with advanced analysis from an internal conversion propensity model visualized as an interactive network diagram. The tool has become an essential asset for UM's client teams, enabling data-driven insights and professional-quality visualizations.
