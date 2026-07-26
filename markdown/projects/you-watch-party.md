---
title: You Watch Party Interactive Experience
date: 2019-12-26
category: Interactive Experience
client: Cosmopolitan Magazine
industry: Media
link: https://www.cosmopolitan.com/entertainment/tv/a30090671/cosmo-google-netflix-you-watch-party-second-screen/
description: A second screen interactive mobile companion experience created for the season two premiere of Netflix's You, featuring behind-the-scenes content, quizzes, and videos that played out in real time alongside the episode, with a custom CMS enabling Cosmopolitan to upload content and a quiz results report at the end of each episode.
---
### Brief
Build a second screen interactive mobile companion experience for the season two premiere of Netflix's You, created in collaboration with Cosmopolitan Magazine. The experience needed to feature behind-the-scenes content, quizzes, and videos about each episode that played out in real time along with the episode being watched. A CMS was needed to enable the Cosmopolitan team to upload content that would be generated into custom interactive cards playing out sequentially in real time. At the end of each episode, users should be able to view a quiz results report and share it with friends.

### Tech Stack
- JavaScript
- React
- D3
- Google App Engine

### Design Process
The design process focused on creating a mobile-first web application with a responsive interface that would adapt to various device sizes while maintaining a clean, intuitive UI. Key challenges included aligning content with specific moments in each episode and implementing smooth pause and resume functionality. The solution involved designing a fluid layout for responsive scaling, creating timed "cards" to appear alongside key episode moments, and using requestAnimationFrame in a custom timer component for precise timing control. Content was tested with pre-release cuts of each episode and fine-tuned by the Cosmopolitan team once the season was ready, ensuring perfect synchronization with the episode playback.

### Development Process
The development process centered on building a custom timer component using requestAnimationFrame for precise timing control, enabling real-time content delivery synchronized with episode playback. Challenges included aligning content with selected moments in each episode while allowing users to pause and resume, and creating smooth animations for the second-screen experience. The solution involved implementing seamless pause and resume functionality, extensive testing with pre-release episode cuts before the premiere, and ensuring smooth interactions throughout the user experience.

### Delivered Result
A second screen interactive mobile experience created for the season two premiere of Netflix's You. The web app features behind-the-scenes content, quizzes, and videos about each episode created by the Cosmopolitan team that played out in real time along with the companion episode. At the end of each episode, users could view a report on how well they answered the quizzes, prompting them to share their results with friends before continuing onto the next episode.

### Summary Narrative
As part of the team at Pitch Interactive, I built the front end of the You Watch Party Interactive Experience for Cosmopolitan Magazine's collaboration with Netflix for the season two premiere of "You." While my colleague created a Python backend CMS running on Google App Engine, I developed a responsive mobile interface with timed interactive cards featuring behind-the-scenes trivia, quizzes, and videos. Using requestAnimationFrame in a custom timer component, I implemented real-time content synchronization with precise pause and resume functionality. The experience successfully engaged Netflix viewers by providing an immersive companion experience that enhanced their viewing of the You season 2 premiere without distracting from the show, allowing them to share quiz results with friends after each episode.
