import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';


class Software extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Software" subtitle="Making science more accessible." />
     <main role="main" className="container-fluid">
           <div className="row">
             <div className="col-md-8 blog-main">

               <div className="blog-post">
                 <h2 className="blog-post-title">Building a simple web tool with React & Rails</h2>
                 <p className="blog-post-meta">June 2018 by Cheney</p>

                 <h3>Motivation</h3>
                  <p>Nearing the end of my training in software development with Bloc, one of our projects is to build an app that will serve as a "proof-of-concept" and later grow into the basis for our own open source project. Coming into software development from working in environmental management and sustainable development, I often found colleagues were frustrated with the overcomplexity of different data warehouses. Phrases like "it has too many options to click through or too many buttons" or questions such as "why do I need a tutorial just to use your website?" were not uncommon. I started building a very simple web application that enables users to quickly query, graph and download datasets from popular development databases, no tutorials or training required. The idea being to eventually add additional databases and data visualization options.
                 </p>
                 <h3>Challenges</h3>

                 <p>Initially, I was planning to build the app with React only, since the data queries are sent to an external API to retrieve the data. My intent was never to recreate the development database(s), rather, to make it easier to search popular datasets. However, I ran into some challenges connecting to the development database, mainly, it was often inaccessible or pretty slow so I decided to make an "archive" database of my own to store a few sample indicators, say for recent years or popular countries,to allow the user to access some data in the event that the external development database was not responding. Rails-5 has a light weight API only option that is a great fit for my purposes.</p>
                <br />
                <p>The next bump in the road came with seeding the database. Prior projects that I had worked on in Rails had used filler data that was populated with the faker gem. The tables had turned, and I needed an easy way to seed my rails db using the indicator data. My first attempt was to read in the file as a json into seeds.db, which is an easy way to seed a rails db. However, the file size was too large. I ended up crashing my computer, oops, back to the drawing board. I knew there had to be a more efficient way to do this. After a quick skim of the Rails docs and StackOverflow, my second attempt was to query the external API from a model and try seeding the database that way. That was OK, but it was slow. That interim step got me on the right track to the most efficient route, which is making the external api call from seeds.rb using the json and open ssl libraries. This solution felt much better, it was a heck of a lot faster, and it made a lot more sense.</p>

             <pre>{`
require 'open-uri'
require 'json'

InfantMortality.delete_all
=begin
read surveyYear file from DHS for top 10 countries with high infant mortality rates in database
Afghanistan (AF), Mali (ML), Central African Republic (CF), Guinea (GN), Chad (TD), Niger (NI), Angola (AO),
Burkina Faso (BF), Nigeria (NG), Sierra Leone (SL)
=end
open("https://api.dhsprogram.com/rest/dhs/data?countryIds=AF,ML,CF,TD,NI,AO,BF,NG,SL&indicatorIds=CM_ECMR_C_IMR") do |infantrates|
  infantrates.read.each_line do |rate|
    infant_data = JSON.parse(rate)
     @infant_mortalities = infant_data["Data"]
  end
end

@infant_mortalities.each do |key, value|
  data = []
   object = {
     DataId: key["DataId"],
     Indicator: key["Indicator"],
     SurveyId: key["SurveyId"],
     IsPreferred: key["IsPreferred"],
     Value: key["Value"],
     SDRID: key["SDRID"],
     ...
   }
   data << object
 InfantMortality.create!(data)
end
                `}</pre>

                 <p>Another challenge I faced pertained to populating the dropdown menus in React. I am currently using the dropdown menus to let the user interactively build the query, e.g. first they select a country, which then triggers an external call to the API to grab the years available for that country, as these are different for different countries and indicators. Next the user selects the surey year, and then the available indicators are obtained, roughly 2500. I stored the various values (country, survey year, indicator) in state as arrays, then mapped over them inside the render function (with a few promises made in between to obtain the data). This seemed logical, however, I found that I was not able to select the first item from the menu, although it was automatically selected. To correct this, I ended up using a filler value as the first dropdown item, e.g. "please select a value".</p>

 <pre>{`
  className DHS extends Component {

  constructor(props) {
   super(props)
   this.state = {
     countries: ["Select a country"], //  countries to populate dropdown menu

     ...
     // when the program loads, make the API call to get data to populate dropdown menu
  componentDidMount() {
    this.getCountries(); // load countries first, other menus are dependent on country selection
  }
  // query DHS API for countries
 async getCountries(){
   var axiosInstance = axios.create({
     baseURL: 'https://api.dhsprogram.com/rest/dhs'
   })
   try {
    let response = await axiosInstance.get('/countries')
    if(response.status === 200){
      this.setState({
        countries: this.state.countries.concat(response.data.Data)
      })
    }
  } catch(err){
    console.log(err);
    window.alert("There was a problem accessing the DHS database. Please try again later or search the archived data under the archives tab");
    window.location = "/";
    return
  }
 }
 // store the selected country from dropdown menu in state
 handleCountry(e){
   var selectedCountry = e.target.value;
   console.log("selected country", selectedCountry);
   var result = this.state.countries.filter((co) =>
     co.CountryName === selectedCountry
  );
   var strCountry = result[0].DHS_CountryCode.toString();
   this.setState({ strCountry: strCountry, selectedCountry: selectedCountry });
   this.setState({ isCountryDisabled: true});
   this.getSurveyYears(strCountry);
  }
   ...
   render(){

         <select classNameName="dropDown" onChange={(e) => this.handleCountry(e)} disabled={this.state.isCountryDisabled}>
          {
            this.state.countries.map((country) =>
             <option key={this.getKey()}>{country.CountryName ? country.CountryName : "Select a country"}</option>
            )
          }
         </select>
  ...
  `}</pre>

  <p>A final challege I encountered of the frontend was that the data visualization library I had chosen, react-vis, has no export capabilities. I knew this at the outset, I had wanted to use highcharts but kept getting errors with the install that could not quickly be resolved, so I decided to give the other library a go. To address this challege, I used html2canvas, which allows you to easily store an image from a dom component with a few basic functions.</p>


  <pre>{`
import html2canvas from 'html2canvas';
...

  // function to convert plot canvas to image
  saveImage(){
    var input = document.getElementById('canvas');
    html2canvas(input)
    .then((canvas) =>{
      let imgData = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
       this.downloadURL(imgData);
    });
  }

  // function to download image to user's desktop
  downloadURL(imgData){
    var a = document.createElement('a');
    a.href = imgData.replace("image/png", "image/octet-stream");
    a.download = 'graph.png';
    a.click();
  }

  // function to enable user to save data as .csv file
  saveCSV(){
    var csvData = [ [this.state.selectedIndicator, this.state.selectedCountry, this.state.selectedYear, this.state.xvalues],["","","",this.state.yvalues]];
    var dataString = '';
    var csvContent = "data:text/csv;charset=utf-8,";
    csvData.forEach(function(infoArray, index){
       dataString = infoArray.join(",");
       csvContent += index < infoArray.length ? dataString + "\n" : dataString;
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", .... csv);
    link.click();
   }
    `}
    </pre>
                 <h3>Learning outcomes</h3>
                 <p>This was a difficult API to work with because it is not always reliable and it tends to be rather slow. The dataset is not homogenous, so you have to do quite a bit of data formatting which eats up time and space.</p>
                 <p>Moving forward, I will likely archive more of the data in an external database to reduce the search time.</p>
                 <p>Making a dynamically populated dropdown from multiple external API calls in React required me to learn more about promises and the async keyword. Working with larger datasets to seed my Rails db required learning different ways to do this, and led to discovering how to use the open-url library in conjunction with the json library to do this. Having to incorporate an additional library because my data visualization did not have an export function reminds me to spend more time debugging installation errors with my initial library of choice, as it does not seem worth it to keep tacking on unnecessary libraries. One of the visible benefits of using React for this project was how much faster it is than the equivalent code in jQuery, which has other benefits I won't discuss here. The DHS offers some sample code for developers using their API in jQuery, I used this as a starting point and "translated" the code into React with much faster query results.</p>

                <h3>Live examples from my portfolio can be found at the link below</h3>
                <li><a href="https://cheneyshreve.github.io" target="_blank" rel="noopener noreferrer"><span>Additional projects & links to live apps on GitHub</span></a></li>
               </div>
             </div>
           </div>

         </main>
<br />
<br />
<br />
<br />


     <Footer/>
  </div>
    );
  }
}


export default Software;
