# Project Overview


## Project Description

In this project I will be creating a weather app that will show the site visitor their current weather conditions, an hourly forecast and a five day forecast based on the users zipcode.

## Project Links

- [https://github.com/mgroth74/project2]()
- [https://objective-jackson-05a262.netlify.com/?_sm_au_=iVVSkDPJLQqNtr7NL321jK0f1JH33]()

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
- Utilize the lat and long to pull temperature data from the openweathermap API 
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
	- Zipcode - input field and calls api's to get lat/long, current and future forecasts
	-	Current - renders the current forecast
	-	Forecast - renders the the 5 day forecast 
	- DayForecast - create the card to display each day of the 5 day forecast
	- HourForecast - renders the hourly forecast
	- Hourly - creates each card to display each indivual hour forecast	

| Component | Description | 
| --- | :---: |  
| App | Will render the various componets to provide a weather forecast to the user.
| Zipcode | Input field and calls api's to get lat/long, current and future forecasts |
| Current | Renders the current forecast |
| Forecast | Renders the the 5 day forecast  |
| DayForecast | Create the card to display each day of the 5 day forecast|
| HourForecast | Renders the hourly forecast |
| Hourly | Creates each card to display each indivual hour forecast	 |

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 3hrs| 2hrs | 2hrs |
| Zipcode | H | 3hrs| 8rs | 8hrs |
| Current 	| H | 6hrs | 5hrs | 5hrs |
| Forecast 	| H | 2hrs | 4hrs | 4hrs |
| DayForecast 	| H | 6hrs | 4hrs | 4hrs |
| HourForecast 	| H | 6hrs | 3hrs | 3hrs |
| Hourly 	| H | 10hrs | 3hrs | 3hrs |
| Verify and Debug 	| H | 4hrs | 6hrs | 6hrs |
| CSS | M | 0 | 8 | 8 |
| Total | H | 36hrs| 43 | 43 |

## Additional Libraries
Only additional library is used was moment to work with the date and time.

## Code Snippet
I was happy to get flexbox to work.
.hour{
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  
}

.hourforecast{
  padding: 20px;
  flex-basis:20%;
  box-sizing: border-box;
  text-align: center;
  border:2px solid white;
  border-radius: 5%;
}

The API did return specific daily forecast so I had to create my own.  To do this I mapped through the api data and then only diplayed the ones that had "18:00:00" as part of the date and time data point.

 if (props.forecast) {
    let foreData = props.forecast.list;
    let dailyData = foreData.map((day, dt) => {
      if (day.dt_txt.includes("18:00:00")) {

        
        return (
          <div className="dayforecast" key={day.dt_txt}>
          <DayForecast 


## Issues and Resolutions

### Error ###
CORS error when attempting to retreive the lat and long from my zip code API.

### Resolution ###
Ended up missing a step registering the application to generate a js key.

### Error ###
Error 400 on API calls Once I got the zip code api working I was trying to pass the lat and long retrieved from the api to the weather api.  Initally I was not able to get the variables to pass from one fetch to the next fetch command.  

### Resolution ###
In order to resolve this I had to put multiple fetchs nested within each other.

### CSS Issues ###
Once everthing was working form a data perspective I had a difficult time getting the daily / hourly forecasts to appear correctly.  I eventually got flexbox working and the results tur out pretty good.


 