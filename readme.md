# Task

Dynamically render apps from JSON objects. Complete solution not required. Open-ended.

* Master layout (e.g. title bar, css/stylesheets, etc.)
* At least one interactive app dynamically generating from JSON
* Reusable components
* Responsive design

## JSON

### Apps.json

* Definition of 2 apps - Metadata about app, fields and layout elements
* Fields have name / type / optional validation object
* 'Object' fields have an 'object' property specifying which object the field is linked to (in the Objects.json file).  These fields are complex types that can't be described in a single value

### Data.json

* Lookup data for making selections, e.g. 5 'Equipment' records with various properties that will allow users to choose equipment

### Objects.json

* Metadata of objects - e.g. what is a 'Manufacturer'
