# COVID-19 Case Mapper - Google News Initiative / Stanford Big Local News

## Project Details

### Title
COVID-19 Case Mapper (Big Local News)

### Brief
Client request: Create an interactive map providing up-to-date, freely embeddable visualizations for local journalists to complement their COVID-19 pandemic coverage. The tool needed to show confirmed cases and fatalities in the US in relation to population in each state and county, using rates per 100k people to normalize comparisons. The map should use moving averages to avoid misleading presentations from statistical artifacts, with search functionality for zip codes or county names. 

### Stakeholders
- Google News Lab's Data Editor
- Director at Stanford's Big Local News

### Team Members
- Pitch Interactive (studio responsible for front-end web application)
  - Myself (contributing developer, focused on rendering)
  - Another developer
  - Executive Creative Director
  - Project Manager
- Stanford Big Local News (aided in creating data pipeline for daily updates)

### My Role
- Contributing developer on the project
- Main focus was rendering choropleth maps and timeseries charts
- Helped ensure accurate presentation of data using moving averages, rates per capita, and normalized categories

### Audience
Local journalists who could use the maps to accompany their coverage of the pandemic

### Design Process, Challenges, Solutions
**Challenges:**
- Accurately presenting trends by geographic region and over time without misleading
- Avoiding misleading presentations from reporting or statistical artifacts
- Using moving averages, rates per capita, and ensuring consistent geographic divisions across data sources

**Solutions:**
- Implemented moving averages to smooth out short-term fluctuations
- Used rates per capita (cases and fatalities per 100k people) to normalize comparisons
- Ensured categories and geographic divisions were normalized for consistency across data sources
- Created flexible charts and scales that could handle unexpected variations

### Tech Stack
- JavaScript, React, D3

### Development Process, Challenges, Solutions
**Challenges:**
- Creating flexible charts and scales which could gracefully handle unexpected variations like late arriving data or sudden spikes in values
- Ensuring map views cleanly focused on their intended region while accounting for unusual features like remote exclaves or combined city-counties in the US

**Solutions:**
- Implemented robust data validation and handling for late-arriving data
- Created responsive chart scales that adapted to sudden spikes in values
- Ensured map views cleanly focused on intended regions
- Tuned bounds-fitting algorithms to account for unusual geographic features

### Delivered Result
Interactive map designed to provide local journalists with easily embeddable and up-to-date visualizations of COVID-19 cases and fatalities in countries and regions around the world. The tool shows confirmed cases and fatalities in the US in relation to the population in each state and county, with search functionality for zip code or county name. Data is pulled daily from the New York Times, and color is based on total reported confirmed cases and fatalities per 100k people, with bar charts showing daily breakdowns.

---

## Client Information

### Client Name
Google News Initiative and Stanford Big Local News

### Industry
Media

### Links
- Google News Initiative: https://newsinitiative.withgoogle.com/
- Stanford Big Local News: https://cjlab.stanford.edu/projects/big-local-news/

---

## Consolidated Narrative

During the height of the pandemic in Summer 2020, I worked with Pitch Interactive, Stanford, and the Google News Initiative to develop and maintain Big Local News' COVID-19 Case Mapper. Pitch Interactive was responsible for the front-end web application, while Stanford Big Local News aided in creating a data pipeline to provide daily updates.

I was a contributing developer on the project, with my main focus being rendering choropleth maps and timeseries charts. The Pitch Interactive team included myself, another developer, our executive creative director, and a project manager.

The project's primary audience was local journalists who could use the maps to accompany their coverage of the pandemic. We took pains to avoid misleading presentations from reporting or statistical artifacts by using moving averages, rates per capita, and ensuring consistent geographic divisions across data sources.

Our design process focused on accurately presenting trends by geographic region and over time without misleading. We implemented moving averages to smooth out short-term fluctuations, used rates per capita (cases and fatalities per 100k people) to normalize comparisons, and ensured that categories and geographic divisions were normalized for consistency across data sources.

On the technical front, we developed flexible charts and scale logic that could gracefully handle unexpected variations like late arriving data or sudden spikes in values. For map views, I tuned bounds-fitting algorithms to keep the focus on the intended region while accounting for unusual geographic features like remote exclaves or combined city-counties.

The final deliverable was an interactive map that provided local journalists with easily embeddable and up-to-date visualizations of COVID-19 cases and fatalities in countries and regions around the world. The tool showed confirmed cases and fatalities in the US in relation to the population in each state and county. Using the search feature, journalists could enter a zip code or county name to pull up the latest reports of COVID-19 in that specific area. The data on COVID-19 confirmed case and fatality numbers was pulled daily from the data collected and reported by the New York Times. The color of each state and county was based on the total number of reported confirmed cases and fatalities per 100k people. Below each map view, we provided a bar chart breakdown of the daily reported confirmed cases and fatalities starting on the date of the first reported case in that area. This tool empowered local journalists with accurate, easy-to-use visualizations to support their pandemic coverage.
