# Phinch App - U.C. Riverside

## Project Details

### Title
Phinch App (Phinch 2.0)

### Brief
Client request: Update Phinch 1.0 into an offline desktop application to better serve researchers working with large biological datasets. In response to community feedback and the increasing scale of biological data, the tool needed to shift from web-based to Electron architecture to enable easy builds for Windows, Mac OS, and Linux, faster loading of large datasets without infrastructure costs, and local data custody. The application needed data cleaning capabilities, export options, data sorting and saving, data verification, and visualizations optimized for biological data.

### Stakeholders
- U.C. Riverside biology faculty
- Phinch 1.0 users

### Team Members
- Pitch Interactive team
  - Myself
  - Pitch Interactive colleagues from Phinch 1.0 team (support)

### My Role
- Partnered with biology faculty at U.C. Riverside to create updated visualization tool
- Gathered requirements through meetings with client and their colleagues in the field
- Decided to shift the tool from web-based to an Electron desktop application
- Created a Python-based loader that could handle both JSON and binary-formatted BIOM files
- Built a system for saving and loading project configuration metadata to the local filesystem
- Created core dataset filtering and visualization tools

### Audience
Researchers working with large biological datasets (microbiomes and metagenomes)

### Design Process, Challenges, Solutions
**Challenges:**
- Working with academic specialists to identify the most useful and relevant output views
- Creating a flexible UI to prefilter complex data across a wide variety of dimensions

**Solutions:**
- Conducted extensive meetings with U.C. Riverside biology faculty and their colleagues in the field
- Collaborated with academic specialists to identify the most useful and relevant output views
- Designed a flexible UI that enabled prefiltering complex data across multiple dimensions
- Optimized visualization tools specifically for biological data types

### Tech Stack
- Electron, React, D3, Python, numpy, h5py, biom

### Development Process, Challenges, Solutions
**Challenges:**
- Creating a cross-platform Electron application with builds for Windows, Mac, and Linux
- Efficiently loading large datasets for manipulation from binary .biom files
- Carefully managing filtering and UI updates to keep visualizations and controls responsive

**Solutions:**
- Built Electron application supporting Windows, Mac OS, and Linux platforms
- Developed Python-based loader for handling both JSON and binary-formatted BIOM files
- Implemented efficient data loading without infrastructure costs or data custody concerns
- Managed filtering and UI updates carefully to maintain responsive performance with large datasets

### Delivered Result
Phinch is an open-source data visualization application aimed at promoting novel explorations and visualization of large biological datasets such as microbiomes and metagenomes. The app works offline as a desktop application on Mac, PC, and Linux computers, offering data cleaning capabilities, better export options, data sorting and saving, data verification, and visualizations optimized for biological data.

---

## Client Information

### Client Name
U.C. Riverside

### Industry
Education

### Links
- U.C. Riverside: https://www.ucr.edu/
- Phinch: https://phinch.org/

---

## Consolidated Narrative

In response to community feedback on Phinch 1.0, created by my colleagues at Pitch Interactive, and the increasing scale of biological datasets, we partnered with biology faculty at U.C. Riverside to create an updated visualization tool to better serve researchers working with large biological datasets.

I was working as a developer at Pitch Interactive at the time. Through meetings with our client and their colleagues in the field, I gathered requirements and decided to shift the tool from web-based to an Electron desktop application. This gave us the ability to easily create builds for Windows, Mac OS, and Linux platforms, and more quickly load large datasets without the infrastructure costs or data custody concerns that would come with uploading them to a server.

In addition to the core dataset filtering and visualization tools, I created a Python-based loader which could handle both JSON and binary-formatted BIOM files, as well as a system for saving and loading project configuration metadata to the local filesystem.

The original Phinch data visualization tool was built in 2014. The refresh included new visualization tools optimized for bio data such as a data cleaning step to help users hone in on the stories within. Some additional new features also included better export capabilities, data sorting and saving, data verification, offline use abilities, and a new visualization output type.

The primary audience was researchers working with large biological datasets, such as microbiomes and metagenomes. The application was designed to be user-friendly and work offline as a desktop application on Mac, PC, and Linux computers.

Our design process focused on working closely with academic specialists to identify the most useful and relevant output views. We created a flexible UI to prefilter complex data across a wide variety of dimensions, optimized specifically for biological data visualization needs.

From a technical perspective, I built an Electron application supporting Windows, Mac OS, and Linux platforms. I developed a Python-based loader to efficiently handle both JSON and binary-formatted BIOM files, eliminating infrastructure costs and data custody concerns. I also managed filtering and UI updates carefully to keep visualizations and controls responsive when working with large datasets.

The final deliverable was an open-source data visualization application aimed at promoting novel explorations and visualization of large biological datasets. The app works offline as a desktop application, offering data cleaning capabilities to help users hone in on the stories within the data, better export options, data sorting and saving, data verification, and visualizations optimized for biological data. This tool empowers researchers to effectively analyze and visualize complex biological datasets without the constraints of uploading sensitive data to servers.
