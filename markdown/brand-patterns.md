# Brand Patterns - UM (Universal McCann)

## Project Details

### Title
Brand Patterns

### Brief
Client request: Build a streamlined tool enabling UM agency teams to create custom visualizations for clients based on their proprietary Brand Patterns model. The application needed to allow teams to select clients, competitors, and audiences; translate selections into YouGov API queries; process results through the Brand Patterns model; and generate client-ready visualizations viewable online or exported as static images.

### Stakeholders
- Chief Product Officer at UM
- Analysts who created the Brand Patterns model
- DevOps team

### Team Members
- Myself (Full Stack Developer)
- Former Two-N Colleague (Front-end Developer)

### My Role
Full stack developer responsible for:
- Converting manually-run R analysis scripts into a web service
- Managing queries and database operations using MySQL with Sequelize
- Creating the network visualization component
- Using the plumber library to handle web requests and route them to data processing functions
- Wrapping the analysis service in Docker for consistent environment integration

### Audience
Agency teams at UM (Universal McCann) and their external clients

### Design Process, Challenges, Solutions
**Challenges:**
- Streamlining brand and audience selection for complex queries
- Highlighting selections that could limit statistical validity
- Designing complex comparisons for readability when exported as static images while providing additional details and options in the interactive web app

**Solutions:**
- Created intuitive selection interface with validation to prevent statistically invalid queries
- Designed dual-output system: interactive web app for exploration and static image exports for client presentations
- Implemented clear visual hierarchy to make complex comparisons readable

### Tech Stack
- **Front-end:** TypeScript, Next.js, React, Redux, D3, TailwindCSS
- **Analysis Service:** R, Plumber, Docker
- **Database:** MySQL with Sequelize
- **API:** YouGov API

### Development Process, Challenges, Solutions
**Challenges:**
- Arranging the layout of a complex network visualization to minimize link and label overlaps
- Building a service to encapsulate analysts' manually-run scripts into an internal service for data processing and structured analysis output

**Solutions:**
- Implemented algorithmic layout approach to optimize network graph positioning
- Used the plumber library to create RESTful endpoints wrapping R scripts, with Docker for environment consistency

### Delivered Result
A Next.js web application that allows client teams to create radar and bar charts of comparative brand sentiment based on YouGov data for customizable audiences, with advanced analysis based on an internal conversion propensity model visualized as a network diagram.

---

## Client Information

### Client Name
UM (Universal McCann)

### Industry
Advertising

### Links
- Primary: https://www.umww.com/
- Holding Company: https://www.omc.com/

---

## Consolidated Narrative

As a freelancer, I collaborated with a former colleague from Two-N to build Brand Patterns for UM (Universal McCann), a streamlined tool enabling agency teams to create custom visualizations based on the agency's proprietary Brand Patterns model. Our selection stemmed from our successful delivery of a similar tool for sister agency Initiative and our established working relationships with their shared technical infrastructure.

The application required teams to select clients, competitors, and audiences, translate those selections into YouGov API queries, process results through our custom analysis service running the proprietary Brand Patterns model, and generate client-ready visualizations. I took responsibility for full stack development, converting analysts' manually-run R scripts into a web service using the plumber library, managing MySQL database operations with Sequelize, and creating a complex network visualization. My colleague focused on front-end development, building the project configuration UI and radar/bar visualizations.

Our design process addressed several key challenges: streamlining brand and audience selection for complex queries while highlighting selections that could limit statistical validity, and creating readable static image exports while maintaining interactive exploration capabilities. From a technical standpoint, I tackled two core challenges: arranging a complex network visualization to minimize link and label overlaps, and building a service to encapsulate analysts' manual scripts into an internal web service with Docker for environment consistency.

The final deliverable is a Next.js web application featuring radar and bar charts of comparative brand sentiment based on YouGov data for customizable audiences, combined with advanced analysis from an internal conversion propensity model visualized as an interactive network diagram. The tool has become an essential asset for UM's client teams, enabling data-driven insights and professional-quality visualizations.
