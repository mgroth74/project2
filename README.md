# Project Overview


## Project Description

In this project I will be creating a weather app that will show the site visitor their current weather conditions, an hourly forecast and a five day forecast based on the users zipcode.

## Project Links

- [https://github.com/mgroth74/project2]()
- [deployment]()

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [https://cloudinary.com/console/media_library/folders/%2Fwireframes]()
- [https://cloudinary.com/console/media_library/folders/%2FApp%20Architecture]()



Define the the React components and the architectural design of your app.

### MVP/PostMVP - 5min

MVP:
Present the user an imput box for a zipcode.  Based on the zip code the user will view the current temp.  The user will also be able to view an hourly temp as well as a five day temp.

Post MVP:
There will be additional information based on the zipcode as well as some additional imagry.


#### MVP EXAMPLE
-	Present the user with an input box to enter a zipcode
- Transform the zipcode into a lat and long
- Utilize the lat and long to pull temperature data from the Dark Sky API 
- Render the temperature specific to the zipcode
- Provide two additonal links for the hourly temperature and a five day temperature

#### PostMVP EXAMPLE

- expand the data that is availble the the forecast to include
	-- feel like temp
	-- wind speed
	-- sunrise and sunset
	-- icon representing the weather
	-- clouds
- expand the hourly forecast to inlcude:
	-- clouds
	-- percipitation %
- expand the five day forecast to include:
	-- percipitation %
	-- sunrise and sunset
	-- clouds
- implement bootstrap for styling
- will need to identify another API to pull the in the icons

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Componenets
	- Header 
	-	Home page with zipcode box
	-	Current forecast
	- Hourly forecast
	- Five day forecast
		-- additional detail for each day of the five day orecast
	- Footer	

| Component | Description | 
| --- | :---: |  
| App | Will render the various componets to provide a weather forecast to the user.
| Header | Will include a home link, image and app name |
| Home | Present the user with an input box for a zipcode and convert it to lat & long |
| Current Forecast | display the current temperature |
| Hourly forecast | display the hourly temperature for the 12 - 24 hours|
| Five Day forecast | display the temperature for the next five days |
| Five day detail | display additona detail for each of the five days with the day is clicked |
| Footer | render addiiontal to other weather infor | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 3hrs|  |  |
| Header | H | 3hrs|  |  |
| Home 	| H | 6hrs |  |
| Current 	| H | 2hrs |  |
| Hourly 	| H | 6hrs |  |
| 5 day 	| H | 6hrs |  |
| 5 day detail 	| H | 10hrs |  |
| Footer 	| L | 1 |  |
| Total | H | 37hrs|  |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
