---
title: Phinch App (Phinch 2.0)
date: 2019-05-09
category: Scientific Visualization
client: U.C. Riverside
industry: Education
link: https://phinch.org/
description: An offline desktop application for researchers exploring large biological datasets such as microbiomes and metagenomes. Created as an Electron application to enable cross-platform distribution to macOS, Windows, and Linux, Phinch provides tools for cleaning, filtering, and sorting HDF5 and JSON BIOM files, with exportable visualizations optimized for biological data.
---
### Need
In response to community feedback on Phinch 1.0, created by my colleagues at Pitch Interactive, and the increasing scale of biological datasets, we partnered with biology faculty at U.C. Riverside to create an updated visualization tool to better serve researchers working with large biological datasets. Researchers needed an offline solution that would eliminate ongoing infrastructure costs and data custody concerns associated with uploading biological dataset to the web.

### Tech Stack
- Front-end: Electron, React, D3
- Data parsing: Python, numpy, h5py, biom

### Requirements & Design
Based on meetings from our client and their colleagues in the field, as well as community feedback, we identified a number of priority features, which included local storage of data files and project configuration, support for BIOM 1.0 (JSON format) and 2.0 (HDF5 format) files, and support for larger file sizes. Another major focus was creating a flexible UI that enabled prefiltering complex data across multiple dimensions.

### Build & Architecture
Creating Phinch 2.0 as an Electron application allowed us to bypass researchers' concerns about upload times and data custody, while saving on hosting costs and enabling them to work offline in their preferred local environment, whether that was Windows, Mac OS, or Linux. I developed a Python-based loader to efficiently handle both JSON and binary-formatted BIOM files commonly used for these datasets, and tuned the front-end to carefully manage filtering and UI updates, maintaining responsive performance even when working with large datasets.

### Delivery & Impact
Phinch 2.0 is an open-source data visualization application aimed at promoting novel explorations and visualization of large biological datasets such as microbiomes and metagenomes. Created as an Electron application to enable cross-platform distribution to macOS, Windows, and Linux, Phinch provides tools for cleaning, filtering, and sorting HDF5 and JSON BIOM files, with exportable visualizations optimized for biological data.