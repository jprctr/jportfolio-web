---
title: You Watch Party
date: 2019-12-26
category: Interactive Experience
client: Cosmopolitan Magazine
industry: Media
link: https://www.cosmopolitan.com/entertainment/tv/a30090671/cosmo-google-netflix-you-watch-party-second-screen/
description: Second screen interactive mobile companion experience created for the season two premiere of Netflix's You, featuring behind-the-scenes content, quizzes, and videos that played out in real time alongside the episode, with a custom CMS enabling Cosmopolitan to upload content and a quiz results report at the end of each episode.
---

### Need
Cosmopolitan Magazine partnered with Netflix to create an immersive second-screen companion experience for the season two premiere of "You," aiming to deepen audience engagement while respecting the show's suspenseful atmosphere. The primary user scenario involved viewers watching the Netflix episode on their primary device while simultaneously using their mobile phones to access interactive content synchronized to specific moments in the episode. Key use cases included: accessing behind-the-scenes trivia and videos at predetermined timestamps during playback, completing interactive quizzes that tested knowledge of plot points and character development, and sharing quiz results with friends on social media after each episode concluded.

### Tech Stack
- JavaScript
- React
- D3
- Google App Engine

### Requirements & Design
Working with Cosmopolitan Magazine stakeholders, we defined core requirements for the You Watch Party experience: a responsive mobile-first interface that could sync interactive content with specific moments in the Netflix episode, seamless pause and resume functionality for viewers with flexible schedules, precise timing alignment between content cards and episode moments, and a CMS enabling the Cosmopolitan team to upload and manage content without technical intervention. The design process centered on creating a clean, intuitive mobile interface that would not distract from the primary viewing experience while providing engaging second-screen interactions. 

### Build & Architecture
To synchronize with episode playback we built a custom timer component powered by requestAnimationFrame to achieve precise timing for content display. My colleague constructed a Python backend CMS on Google App Engine to manage content uploads, while I developed the responsive React front end featuring timed interactive cards for behind-the-scenes trivia, quizzes, and videos. Content was validated through testing with pre-release episode cuts, allowing the Cosmopolitan team to fine-tune synchronization once the season was available, ensuring perfect alignment between the interactive experience and the actual episode playback.

### Delivery & Impact
The You Watch Party experience engaged Cosmopolitan Magazine's readership by providing an immersive companion experience that enhanced their viewing of the You season 2 premiere. The responsive mobile interface delivered behind-the-scenes trivia, quizzes, and videos in real-time synchronization with episode playback, creating a layered viewing experience that deepened audience connection to the show's plot and characters. After each episode, viewers could access detailed quiz results reports and share their performance with friends, extending the experience beyond the viewing session into social sharing.
