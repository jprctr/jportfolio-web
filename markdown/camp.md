# CAMP (Center for Analytics Modeling and Performance) - Hospital for Special Surgery

## Project Details

### Title
Center for Analytics Modeling and Performance (CAMP)

### Brief
Client request: Build an enterprise-wide KPI-centered dashboard and interactive data analytics center of excellence for the CAMP team at Hospital for Special Surgery. The project included an operational excellence data analytics center with touchscreens, hospital and provider network monitoring with heat maps and 3D flyover views, and a patient journey storyteller feature. The goal was to create advanced data analytics and awareness supporting better quality care and $2.1B in annual operations.

### Stakeholders
- Executive Director, Center for Analytics, Modeling & Performance
- Chief Analytics Officer
- HSS CAMP team members
- Workspace Architects

### Team Members
- Myself (Lead Developer)
- Front-End Developer
- Design Lead
- Project Manager

### My Role
- Lead developer responsible for architecting the deck.gl visualization solution
- Developed performance-optimized 2D visualizations using D3 (precaching positions, drawing to canvas)
- Managed and reviewed code contributions from junior developer
- Worked on patient journey storyteller component (algorithm development for identifying complex patient journeys)
- Collaborated with design lead and junior engineer to prototype 3D and 2D experiences

### Audience
Hospital staff on the CAMP (analytics) team at Hospital for Special Surgery

### Design Process, Challenges, Solutions
**Challenges:**
- Ensuring readability and clarity for large touch displays
- Balancing eye-catching aesthetics with practical usefulness
- Creating visualizations that reflect user needs and fit seamlessly into the new workspace

**Solutions:**
- Conducted on-site workshops with CAMP team and workspace architects to gather feedback
- Scaled up type and interface elements for touch displays
- Implemented automatic smoothing for complex actions like map zooming
- Defined clear purposes for each visualization with expandable detail views
- Created an interactive data analytics center of excellence that incites delight while maintaining the gravity of elite healthcare delivery

### Tech Stack
- Visualization: Deck.gl (Basemap, heatmap, 3D rendering), D3
- Framework: React
- Platform: Web application
- Technologies: JavaScript, HTML, CSS, AWS, custom data APIs

### Development Process, Challenges, Solutions
**Challenges:**
- Performance optimization for data and rendering-heavy applications
- Managing deck.gl's updateTriggers for each layer to prevent unnecessary renders
- Ensuring high performance and responsive visualizations for 2D visuals and interactive maps

**Solutions:**
- Architected solution using deck.gl (choosen for geospatial and performance features)
- For 2D visuals using D3: precalculated positions and drew to canvas rather than SVG
- Carefully managed deck.gl's updateTriggers for each layer to prevent unnecessary renders

### Delivered Result
Exploratory and status visualizations for HSS's data analytics workspace, including interactive maps of associated providers, facility usage status board with KPIs (waiting and operating room capacity and status by facility and department), and department-level summaries of services. The project exceeded acceptance criteria with positive feedback, supporting better quality care for HSS's more than more than 200,000 patients treated annually.

---

## Client Information

### Client Name
Hospital for Special Surgery (HSS)

### Industry
Healthcare

### Links
- https://www.hss.edu/

---

## Consolidated Narrative

As lead developer at Two-N, I led the development of CAMP (Center for Analytics Modeling and Performance) for Hospital for Special Surgery, creating exploratory and status visualizations for their data analytics and performance modeling group. The project included interactive maps of associated providers, a facility usage status board, and department-level summaries of services with key performance indicators tracking waiting and operating room capacity and status by facility and department.

I worked directly with the Executive Director of CAMP, the Chief Analytics Officer, alongside a junior engineer, our design director and project manager my studio. My responsibilities included architecting the deck.gl visualization solution, developing performance-optimized 2D visualizations using D3, managing and reviewing code contributions from a junior developer, and contributing to the patient journey storyteller component with algorithm development for identifying complex patient journeys. I partnered with our design director and junior engineer to rapidly experiment with and prototype 3D and 2D experiences.

Our design process emphasized user-centered development. We conducted on-site workshops with the CAMP team and workspace architects to gather feedback, ensuring our visualizations reflected user needs and fit seamlessly into their new workspace. We addressed challenges with large touch display readability by scaling up type and interface elements and implementing simple controls for complex actions like repositioning the map to focus on groups of facilities and key service areas. We balanced eye-catching aesthetics with practical usefulness by defining clear purposes for each visualization and enabling detailed views when users interacted with the content.

On the technical side, we optimized performance for data and rendering-heavy applications. We chose deck.gl over alternatives for the interactive maps, carefully managing updateTriggers for each layer to prevent unnecessary renders. For 2D visuals using D3, we precalculated positions and drew to canvas rather than SVG. 

The final deliverable included an interactive data analytics center of excellence displayed on touchscreens, featuring visualizations that incite delight while maintaining the gravity and importance of elite healthcare delivery and operational excellence. The project exceeded acceptance criteria with positive feedback from the CAMP team, supporting better quality care for HSS's more than more than 200,000 patients treated annually.
