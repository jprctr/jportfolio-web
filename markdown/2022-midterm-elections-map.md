# 2022 Midterm Elections Map - NBC News

## Project Details

### Title
2022 Midterm Elections Map (Hitboard)

### Brief
Client request: Update the Hitboard interactive election map to highlight notable House races during the 2022 midterm elections. The project required incorporating a new district collections component to highlight competitive or otherwise notable races, while maintaining the visual language and intuitive touch interface necessary for live television operation. The custom CMS needed to be updated to allow NBC teams to easily create and manage collections of House races on the fly for display on air.

### Stakeholders
- NBC News Software Engineering team leads
- NBC News Web Product team leads

### Team Members
- Myself (Primary Developer)
- 2nd  Developer (created initial prototype for House Districts collection)
- Design Director (refined the House Districts collection prototype)
- Two-N Project Manager
- NBC News engineering/web product team

### My Role
- Implemented the Design Director's refined design into the existing NBC News codebase
- Updated the custom CMS to allow easy creation and management of house race collections for on-air display
- Communicated updates to counterparts on NBC engineering and web product teams
- Attended meetings to gather requirements and feedback
- Worked with NBC's PR/CI process to get features released

### Audience
- Primary: On-air anchor Steve Kornacki reporting live election updates
- Secondary: NBC News audience watching live election coverage
- Tertiary: NBC News producers creating collections of house races

### Design Process, Challenges, Solutions
**Challenges:**
- Incorporating new district collections component to highlight competitive or notable House races
- Maintaining visual language and intuitive touch interface necessary for live television operation
- Displaying large or small collections of districts cleanly
- Clearly distinguishing race status as data fills in and is eventually called

**Solutions:**
- Implemented grouped district collections for easy navigation and highlighting of key races
- Ensured smooth visual transitions when race status updates (indicators smoothly transition to new positions or colors)
- Avoided jarring visual updates or confusion as items are reordered
- Maintained consistent visual language with existing Hitboard interface
- Designed intuitive touch interface for live television operation

### Tech Stack
- JavaScript, Vue, D3

### Development Process, Challenges, Solutions
**Challenges:**
- Cleanly animating live data updates to vote counts, race status, map view, and sidebar transitions
- Integrating new component into complex existing application and data model
- Adding new features while working within established conventions
- Ensuring compatibility with NBC's PR/CI release process

**Solutions:**
- Implemented smooth animations for all live data updates and transitions
- Carefully integrated new component into existing codebase and data model
- Followed established conventions while extending functionality
- Collaborated closely with NBC engineering and web product teams
- Coordinated through PR/CI process for successful feature releases

### Delivered Result
Update to NBC News and MSNBC's election map in preparation for the 2022 midterm elections with a focus on adding district collections and grouping features to support tracking key House races. The enhanced map enabled on-air anchor Steve Kornacki to effectively present live election updates to NBC News viewers.

---

## Client Information

### Client Name
NBC News

### Industry
Media

### Links
- https://www.nbcnews.com/

---

## Consolidated Narrative

As a developer at Two-N, I worked on the 2022 Midterm Elections Map (internally known as Hitboard) for NBC News, updating their interactive election map to highlight notable House races during the 2022 midterm elections. The project involved working closely with NBC News Software Engineering and Web Product team leads, along with a project manager from our side.

When the project began, another developer on my team created an initial prototype for the House Districts collection, which was then refined by our Design Director. I was tasked with implementing that design into the existing NBC News codebase maintained by the NBC team, as well as updating their custom CMS to allow them to easily create and manage collections of House races on the fly for display on air. Beyond the technical implementation, I was also responsible for communicating updates to my counterparts on the NBC engineering and web product teams, attending meetings to gather requirements and feedback, and working with their PR/CI process to get our features released.

The election coverage map was used on air by anchor Steve Kornacki to report live election updates to the NBC News audience. This made visual consistency and smooth transitions particularly important. As the status of each House race was updated, the indicator for that district needed to smoothly transition to a new position or color to help avoid jarring visual updates or confusion as items were reordered.

We incorporated a new component called district collections to highlight competitive or otherwise notable House races, while maintaining the visual language and intuitive touch interface necessary to operate on live television. We also ensured cleanly displaying large or small collections of districts, while gracefully handling and clearly distinguishing the status of a race as its data was filled in and eventually called.

From a technical standpoint, we needed to ensure cleanly animating live data updates to vote counts, race status, as well as map view and sidebar transitions. We also needed to integrate a new component into a complex existing application and data model, adding new features while working within established conventions.

We collaborated closely with NBC's engineering and web product teams, coordinating through their PR/CI process for successful feature releases. The final deliverable was an updated election map that successfully supported tracking key House races during the 2022 midterm elections, enabling on-air anchor Steve Kornacki to effectively present live election updates to NBC News viewers.
