---
title: COVID-19 Case Mapper
date: 2020-08-01
category: Data Journalism
client: Google News Initiative / Stanford Big Local News
industry: Media
link: https://covid19.biglocalnews.org/county-maps
description: Interactive mapping tool developed with Pitch Interactive and Stanford Big Local News to provide local journalists with freely embeddable visualizations of COVID-19 confirmed cases and fatalities across US states and counties, normalized per 100k population with moving averages to ensure accurate, up-to-date pandemic coverage.
---
### Need
To support local journalists covering the COVID-19 pandemic the Google News Initiative and Stanford's Big Local News sought to create freely embeddable, up-to-date interactive visualizations to present COVID-19 data for local communities with accurate normalization to enable meaningful comparisons across different regions. The tool needed tool display data in relation to population, using rates per 100k people, to fairly compare areas of varying population sizes, incorporates moving averages to prevent misleading representations from statistical artifacts or reporting inconsistencies, and offers search functionality by zip code or county name for quick access to specific geographic data.

### Tech Stack
- JavaScript
- React
- D3

### Requirements & Design
Design goals centered on achieving accurate trend representation across geographic regions and time periods while avoiding common pitfalls, such as misleading presentations from inconsistent reporting or statistical artifacts. Key priorities included normalizing comparisons between areas of different population sizes, smoothing data over time using moving averages to account for reporting inconsistencies, and ensuring geographic divisions remained consistent across multiple data sources. The collaborative design process resulted in a solution featuring flexible chart implementations and adaptable scales that could gracefully accommodate unexpected data variations, while the team worked to create normalized categories and geographic divisions that maintained consistency across the diverse data ecosystem surrounding pandemic reporting.

### Build & Architecture
Development focused on building robust chart implementations and scale logic capable of handling the unpredictable nature of pandemic data, including late-arriving information and sudden spikes in case counts. The architecture incorporated tuning of bounds-fitting algorithms for map views to maintain focus on intended regions while properly accounting for geographic complexities such as remote exclaves and combined city-county jurisdictions. Responsive chart scales were engineered to dynamically adapt to sudden data changes, ensuring that visualizations remained informative and reliable throughout the rapidly evolving pandemic landscape.

### Delivery & Impact
The final deliverable was an interactive map tool that enabled local journalists to seamlessly embed current visualizations of COVID-19 cases and fatalities into their news coverage, with data sourced daily from the New York Times and color-coded based on total reported cases and fatalities per 100k population, complemented by bar charts displaying daily breakdowns. Beyond the core mapping functionality, the tool provided search capabilities by zip code or county name, allowing journalists to quickly access and present specific regional data for their communities. During the critical summer of 2020, this solution served as a vital resource for journalists worldwide, delivering accurate, freely available visualizations that helped bridge the gap between complex public health data and accessible news reporting.
