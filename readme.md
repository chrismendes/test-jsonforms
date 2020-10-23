# Code Exercise - JSON Forms

  > A very simple React application that renders forms according to their JSON definition.

  > Run the app at: https://app-jsonforms.chrismendes.uk

## Overview

**Key Points**

* Components for JSON-defined forms located separately in `/src/clientforms` directory
* Source files for components/logic rendering the forms located in `/src/formviewer` directory
* Solution opts for strong use of the "Factory" design pattern with "factory" components responsible for generating components on request (see `/src/formviewer/factories` directory), e.g. FieldFactory component will generate TextField or DateTime field for example based on JSON definition
* Routes determined by JSON definitions with 'apps/' prefix, implemented with React Router
* "Material UI" library used for quick off-the-shelf UI components as a helpful resource for rapid prototyping
* "Emotion" implementation of JSS (CSS in JavaScript) used as a substitute for physical CSS/Sass files
* CSS Grid Layout used to easily position fields into correct column and row as per JSON definition
* Responsive styles ensure forms are rendered as a single column on small screens

**Technology Breakdown**

* React, JavaScript ES6, JSS/Emotion
* HTML5, CSS3
* Material UI
* Google Firebase Hosting

**Limitations (due to time restriction)**

* Not all UI components defined by the provided JSON files have been implemented (e.g Object, Phone, Location)
* Features such as form validation and data object lookup as featured in provided JSON not implemented (app and field recognition and layout positioning only)
* App sidebar is hidden on small screens but menu button to slide in sidebar not implemented
* Slider component used for Integer field type (to showcase another Material UI component), but JSON defined maximum value not implemented

**Run the app**

* Run the app in development mode with the command `npm start` (install dependencies with `npm install`)
* App will reload in browser on file edit

## License

Copyright (c) 2020 Chris Mendes

Licensed under the MIT License