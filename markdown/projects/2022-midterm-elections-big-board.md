---
title: 2022 Midterm Elections Big Board
date: 2022-10-01
category: Data Journalism
client: NBC News
industry: Media
link: 
description: Update the Hitboard interactive election map to highlight notable House races during the 2022 midterm elections, incorporating a new district collections component for competitive or notable races while maintaining the visual language and intuitive touch interface for live television operation.
---
## 2022 Midterm Elections Big Board

### Brief
Update the Hitboard interactive election map to highlight notable House races during the 2022 midterm elections. The project required incorporating a new district collections component to highlight competitive or otherwise notable races, while maintaining the visual language and intuitive touch interface necessary for live television operation. The custom CMS needed to be updated to allow NBC teams to easily create and manage collections of House races on the fly for display on air.

### Tech Stack
- JavaScript
- Vue
- D3

### Design Process
The new district collections component needed to integrate seamlessly with Hitboard's established visual language while serving a distinct purpose: enabling anchors to quickly reference groups of competitive House races. The design prioritized clarity over density—districts were organized into logical collections based on competitiveness or relevance, not just geographic proximity. Visual hierarchy emphasized collection headers and highlighted key races without overwhelming viewers. The touch interface was designed for television operation, with large tap targets and minimal interaction required during live broadcasts.

### Development Process
Implementing the district collections component required extending Hitboard's existing data model without disrupting the real-time election data pipeline. I integrated a collections grouping layer that maintained compatibility with the existing district representation while adding metadata for collection membership and sorting. Vote count animations, race status transitions, and map view updates all leveraged the same animation system, ensuring consistency. Collaboration with NBC engineering teams aligned the implementation with their PR/CI workflow, and the new component was released alongside other election features to streamline deployment.

### Delivered Result
Update to NBC News and MSNBC's election map in preparation for the 2022 midterm elections with a focus on adding district collections and grouping features to support tracking key House races. The enhanced map enabled on-air anchor Steve Kornacki to effectively present live election updates to NBC News viewers.

### Summary Narrative
As the primary developer at Two-N, I led the implementation of the 2022 Midterm Elections Map project for NBC News, working alongside a 2nd Developer who created the initial House Districts collection prototype and our Design Director who refined the design. The project involved close collaboration with NBC News Software Engineering and Web Product team leads, as well as a Two-N Project Manager. My responsibilities extended beyond technical implementation to include regular communication with NBC engineering and web product counterparts, attending meetings to gather requirements and feedback, and coordinating through NBC's PR/CI process to ensure successful feature releases. I managed the end-to-end workflow from implementing the Design Director's refined design into the existing NBC codebase to facilitating stakeholder alignment and communication across teams.