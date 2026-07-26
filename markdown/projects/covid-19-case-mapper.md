---
title: COVID-19 Case Mapper
date: 2020-08-01
category: Data Journalism
client: Google News Initiative / Stanford Big Local News
industry: Media
link: https://covid19.biglocalnews.org/county-maps
description: An interactive map tool developed with Pitch Interactive and Stanford Big Local News to provide local journalists with freely embeddable visualizations of COVID-19 confirmed cases and fatalities across US states and counties, normalized per 100k population with moving averages to ensure accurate, up-to-date pandemic coverage.
---
### Brief
Create an interactive map providing up-to-date, freely embeddable visualizations for local journalists to complement their COVID-19 pandemic coverage. The tool needed to show confirmed cases and fatalities in the US in relation to population in each state and county, using rates per 100k people to normalize comparisons. The map should use moving averages to avoid misleading presentations from statistical artifacts, with search functionality for zip codes or county names.

### Tech Stack
- JavaScript
- React
- D3

### Design Process
The design process focused on accurately presenting COVID-19 trends by geographic region and over time without misleading representations. Key challenges included avoiding statistical artifacts from reporting inconsistencies and ensuring consistent geographic divisions across data sources. Solutions implemented included using moving averages to smooth out short-term fluctuations, presenting rates per capita (cases and fatalities per 100k people) to normalize comparisons between areas of different population sizes, and ensuring categories and geographic divisions were normalized for consistency across data sources. The team also created flexible charts and scales that could handle unexpected variations in the data.

### Development Process
The development process involved creating flexible chart implementations and scale logic that could gracefully handle unexpected variations such as late-arriving data or sudden spikes in values. For the map views, the developer tuned bounds-fitting algorithms to keep the focus on the intended region while accounting for unusual geographic features like remote exclaves or combined city-counties in the US. Challenges included ensuring map views cleanly focused on their intended region and creating responsive chart scales that adapted to sudden changes in data.

### Delivered Result
Interactive map designed to provide local journalists with easily embeddable and up-to-date visualizations of COVID-19 cases and fatalities in countries and regions around the world. The tool shows confirmed cases and fatalities in the US in relation to the population in each state and county, with search functionality for zip code or county name. Data is pulled daily from the New York Times, and color is based on total reported confirmed cases and fatalities per 100k people, with bar charts showing daily breakdowns.

### Summary Narrative
During the height of the pandemic in Summer 2020, the project involved collaboration with Pitch Interactive, Stanford, and the Google News Initiative to develop and maintain Big Local News' COVID-19 Case Mapper. As a contributing developer, the main focus was rendering choropleth maps and timeseries charts while helping ensure accurate presentation of data using moving averages, rates per capita, and normalized categories. The project empowered local journalists with accurate, easy-to-use visualizations to support their pandemic coverage by providing an interactive map that showed COVID-19 data normalized per 100k population with moving averages to avoid misleading representations.
