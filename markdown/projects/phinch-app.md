---
title: Phinch App (Phinch 2.0)
date: 2019-05-09
category: Scientific Visualization
client: U.C. Riverside
industry: Education
link: https://phinch.org/
description: An offline desktop application for researchers working with large biological datasets such as microbiomes and metagenomes. Built as an Electron-based application, it provides data cleaning, export options, data sorting and saving, data verification, and visualizations optimized for biological data.
---
### Brief
Update Phinch 1.0 into an offline desktop application to better serve researchers working with large biological datasets. In response to community feedback and the increasing scale of biological data, the tool needed to shift from web-based to Electron architecture to enable easy builds for Windows, Mac OS, and Linux, faster loading of large datasets without infrastructure costs, and local data custody. The application needed data cleaning capabilities, export options, data sorting and saving, data verification, and visualizations optimized for biological data.

The original Phinch data visualization tool was built in 2014. The refresh included new visualization tools optimized for bio data such as a data cleaning step to help users hone in on the stories within. Some additional new features also included better export capabilities, data sorting and saving, data verification, offline use abilities, and a new visualization output type.

The primary audience was researchers working with large biological datasets, such as microbiomes and metagenomes. The application was designed to be user-friendly and work offline as a desktop application on Mac, PC, and Linux computers.

### Tech Stack
- Front-end: Electron, React, D3
- Data parsing: Python, numpy, h5py, biom

### Design Process
- Conducted extensive meetings with U.C. Riverside biology faculty and their colleagues in the field to identify the most useful and relevant output views
- Collaborated with academic specialists to understand their specific visualization needs
- Designed a flexible UI that enabled prefiltering complex data across multiple dimensions
- Optimized visualization tools specifically for biological data types

### Development Process
- Built an Electron application supporting Windows, Mac OS, and Linux platforms
- Developed a Python-based loader to efficiently handle both JSON and binary-formatted BIOM files
- Implemented efficient data loading without infrastructure costs or data custody concerns
- Managed filtering and UI updates carefully to maintain responsive performance with large datasets

### Delivered Result
Phinch is an open-source data visualization application aimed at promoting novel explorations and visualization of large biological datasets such as microbiomes and metagenomes. The app works offline as a desktop application on Mac, PC, and Linux computers, offering data cleaning capabilities, better export options, data sorting and saving, data verification, and visualizations optimized for biological data. This tool empowers researchers to effectively analyze and visualize complex biological datasets without the constraints of uploading sensitive data to servers.

### Summary Narrative
In response to community feedback on Phinch 1.0 and the increasing scale of biological datasets, partnered with biology faculty at U.C. Riverside to create an updated visualization tool. Working as a developer at Pitch Interactive, gathered requirements through meetings with clients and decided to shift the tool from web-based to an Electron desktop application. This enabled easy creation of builds for Windows, Mac OS, and Linux platforms, and more quickly loaded large datasets without infrastructure costs or data custody concerns. Created a Python-based loader that could handle both JSON and binary-formatted BIOM files, as well as a system for saving and loading project configuration metadata to the local filesystem. The design focused on working closely with academic specialists to identify useful output views and creating a flexible UI to prefilter complex data across multiple dimensions. The final deliverable was an open-source desktop application that works offline and provides data cleaning, export options, data sorting and saving, data verification, and visualizations optimized for biological data.
