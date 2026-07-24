# Decoding Hate - The Asian American Foundation

## Project Details

### Title
Decoding Hate

### Brief
Client request: Visualize the unprecedented amount of hate incidents targeting the AAPI community during the COVID-19 pandemic. The project needed to capture hate incidents reported by news organizations and social media users to convey the magnitude and scope of the crisis. The experience should help shed light on various attributes including location, victim gender, and whether incidents were COVID-related, while raising awareness and encouraging support for those affected.

### Stakeholders
- The Asian American Foundation leadership

### Team Members
- Myself
- Another developer
- Executive Creative Director

### My Role
- Developed the scrolling narrative portion of the experience
- Created and rendered 3D fragments using Three.js, react-three-fiber, and Tween.js
- Integrated interface elements and text with React
- Optimized performance to maintain consistent 60fps through element instancing and scroll event throttling

### Audience
General public, with the goal of raising awareness of the seriousness of anti-Asian hate and encouraging support for those affected

### Design Process, Challenges, Solutions
**Challenges:**
- Showing the aggregate impact of so many individual incidents
- Highlighting both the overwhelming volume and specific examples
- Providing higher level aggregate analysis in the categorized timeline

**Solutions:**
- Used harsh angular design of fragments to reflect the harmful nature of the incidents they represent
- Gave each statement room to breathe in the transitions, giving the serious topic appropriate weight
- Created a scrolling narrative section for specific examples alongside a categorized timeline for aggregate analysis
- Visualized all accounts as 3D fragments, with a flood animation at the start to convey the magnitude of incidents

### Tech Stack
- JavaScript, React, Three.js, react-three-fiber, Tween.js

### Development Process, Challenges, Solutions
**Challenges:**
- Maintaining fluid animations and responsive interactions while visualizing thousands of incidents
- Ensuring consistent 60fps performance with large numbers of 3D elements

**Solutions:**
- Instanced rendered elements to optimize rendering performance
- Throttled scroll events to limit unnecessary re-renders
- Spent extensive time choosing specific easing functions to achieve desired animation effects
- Used mesh surface sampler technique to arrange fragments into the shape of title text for the intro

### Delivered Result
Guided scrolling narrative and interactive timeline of anti-Asian hate incidents as reported by news organizations and social media users, visualized as a torrent of 3D fragments. The experience helps shed light on various attributes of each incident, including location, victim gender, and whether the incident was COVID-related.

---

## Client Information

### Client Name
The Asian American Foundation (TAAF)

### Industry
Nonprofit

### Links
- https://www.taaf.org/

---

## Consolidated Narrative

During the midst of the COVID-19 pandemic, the team at Pitch Interactive was selected by The Asian American Foundation to help visualize the unprecedented amount of hate incidents targeting the AAPI community. The project, titled Decoding Hate, created a scrolling narrative and interactive timeline visualizing hate incidents as reported by news organizations and social media users, displayed as a torrent of 3D fragments.

I worked alongside another developer on this project. My colleague primarily focused on the timeline element, while I was mainly responsible for the scrolling narrative portion. We created the 3D fragments using Three.js, integrating them with react-three-fiber and using Tween.js to create refined and smooth animations. Interface elements and text were created with React. I optimized performance to maintain consistent 60fps through element instancing and scroll event throttling.

The project's audience was the general public, with the goal of raising awareness of the seriousness of anti-Asian hate and encouraging support for those affected. The experience was designed to convey the magnitude of hate incidents through a flood animation at the start, while allowing viewers to explore every fragment categorized by the types of hate incidents described in the tweet or news report chronologically from the start of the pandemic to present.

Our design process focused on ensuring the harsh angular design of the fragments reflected the harmful nature of the incidents they represent, while also giving the serious topic appropriate weight by giving each statement room to breathe in the transitions. We wanted to both highlight the overwhelming volume of incidents and highlight specific examples, as in the scrolling narrative section, as well as provide a higher level aggregate analysis in the categorized timeline.

Technically our focus was on maintaining fluid animations and responsive interactions while visualizing thousands of incidents required significant optimizations to our rendering in Three.js. We instanced the rendered elements and throttled scroll events to limit unnecessary re-renders. We spent extensive time choosing specific easing functions to achieve the desired animation effects, and used a mesh surface sampler technique to arrange fragments into the shape of the title text for the intro.

The final deliverable was a guided scrolling narrative and interactive timeline that effectively visualized anti-Asian hate incidents as reported by news organizations and social media users. The 3D fragments represented each hate incident, with various attributes including location (businesses had the highest), victim gender (if known), and whether the incident was COVID-related. The experience helped shed light on the scope and nature of the crisis, providing viewers with both an emotional connection through specific narratives and analytical understanding through the categorized timeline.
