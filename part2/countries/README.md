# Data for countries

This is an exercise in fulfilment of the Full Stack Open course published by the University of Helsinki.

### How it works

Data for countries uses axios to fetch country data from https://studies.cs.helsinki.fi/restcountries/. Country names can be filtered with the input box, and they will be displayed as long as there are ten or fewer matching entries. If only one entry matches, data for that country will be displayed. Each list item also has a show/hide button for that country's data. Weather data from openweathermap.org will also be displayed, but an API key will need to be supplied when running as an environment variable.

### Implementation details

Prior to implementing the show/hide button feature, Data for countries would simply display data based on the length of the filtered array of countries. In order to make the buttons work, I introduced a state variable describing which country to display (or null if none). This state variable is set either by clicking the buttons, or when the filtered country array, and therefore its length, is altered.

When implementing weather data lookup, I added a new service for fetching weather data from openweathermap.org in weather.js. This data is displayed in a new component called Weather that is only rendered when CountryData is rendered.
