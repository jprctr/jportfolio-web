---
title: 2022 Midterm Elections Big Board
date: 2022-10-01
category: Data Journalism
client: NBC News
industry: Media
link: 
description: Update to NBC's Big Board interactive election map to highlight notable House races during the 2022 midterm elections. Incorporated a new district collections component for competitive or notable races while maintaining consistent visual language and intuitive touch interface for use on live television.
---
### Need
NBC News approached my team at Two-N to build an enhancement to their interactive election map for the 2022 midterm elections to enable live coverage of competitive House races. The primary use case was to quickly reference and group multiple competitive districts during live broadcasts without disrupting the natural flow of coverage. As a live television operation, the interface needed to support quick navigation between related races, allowing anchors to present grouped competitive districts rather than requiring them to manually track individual races across the map, and enable the production team to dynamically curate and display collections of notable races, responding rapidly to election developments.

### Tech Stack
- JavaScript
- Vue
- D3

### Requirements & Design
Working with NBC News Software Engineering and Web Product team leads, we identified that the district collections feature needed to balance information density with broadcast usability. Our goal was to enable anchors to easily reference grouped competitive races while maintaining the established Hitboard visual identity and making the current status of each race clear. The touch interface was specifically designed for live TV operation, incorporating large tap targets and minimizing interaction steps to ensure seamless performance during high-pressure broadcast environments. Regular check-ins with NBC counterparts ensured the design accommodated both the technical constraints of the existing codebase and the operational realities of live election coverage.

### Build & Architecture
Implementing the district collections component required extending the existing data model without disrupting the real-time election data pipeline. I integrated a collections grouping layer that maintained compatibility with the existing district representation while adding metadata for collection membership and sorting. Vote count animations, race status transitions, and map view updates all leveraged the same animation system, ensuring consistency. Collaboration with NBC engineering teams aligned the implementation with their PR/CI workflow, and the new component was released alongside other election features to streamline deployment.

### Delivery & Impact
A comprehensive enhancement to NBC News' election map in preparation for the 2022 midterm elections, featuring new district collections and grouping capabilities that supported real-time tracking of key House races. This functionality enabled on-air anchor Steve Kornacki to effectively present live election updates to NBC News viewers, allowing seamless transitions between grouped competitive races during broadcasts. The enhancement successfully bridged the gap between complex election data and accessible live television presentation, empowering the production team to dynamically curate content in response to developing election stories while maintaining the visual language and operational workflow that NBC News viewers had come to expect from the Big Board.
