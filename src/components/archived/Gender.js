import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import './Gender.css';

class Gender extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Disaggregated Data" subtitle="Why it matters for disasters." />
     <div className="container">

     <h1>Why gender data matters for disasters.</h1>
      <h4>Written by: Cheney Shreve, 12 May 2018</h4>
     <br />
     <p>People often describe disasters as natural events, something beyond our control. The scientific evidence is strong, however, in indicating that humans are influencing the global climate. We are experiencing more severe, and more frequent, extreme weather events. These events tend to precipitate disasters however, they are not the root cause. A closer examination shows us that the causes of disasters are not natural hazard events themselves, e.g. earthquakes, landslides, fires, or floods, but how we as a society, plan for, or don’t plan for, these events. For example, are we building in floodplains, if so, are we taking adequate mitigation steps?  Are we building in soft sediments along active fault zones, if so, are the buildings able to withstand an earthquake, and how severe of an earthquake? Do we have a tsunami warning in place, and shelters?</p>

    <p>While the science is there to support risk analysis, even for events such as earthquakes, where we can’t predict with any certainty when it will occur, we do know how strong it could be, but yet most societies lag behind with regard to preparing for these events, and we’re paying the price. The cost of disasters continues to climb for nations across the globe, regardless of affluence. </p>
    <br />
    <img alt="Graph of reported disaster stastics." className="graphImage" src={process.env.PUBLIC_URL + '/total_reported_disasters.png'} />
      <br />
      <p> Why on earth would gender matter in such a situation? Gender inequality may not seem important when a hurricane or an epidemic occurs; these ‘forces of nature’ don’t seem to discriminate based on age, sex, or ethnicity, but most societies do.</p>

      <p>Gender disaggregated data on disaster impacts is limited, and much of it is anecdotal. Where available, what we do see are some pretty striking trends; some types of disasters tend to impact certain groups disproportionately in comparison to others. Examining the causes of flood mortality in case studies in the US and Europe, Jonkman and Kelman (2005) found men were more likely to die during flooding events, especially in automobiles. A study by Zahran, Peek and Brody, (2008) examining child and youth mortality during disasters in the US, similarly found male children and youth to be more at risk, likely due to social norms associated with risk taking behaviors. Heatwaves in the US in France in the past decade disproportionately impacted African American males, for example, in Chicago, and elderly Caucasian women in France. In the Chicago example, elderly residents reported being too afraid to come out and ask for help. The gender dynamics in epidemics are even trickier to consider, as they intertwine with gendered care giving roles, proximity to animals and animal products, as well as biological differences between the sexes, e.g. pregnant and lactating women and infants have different risks and needs compared than the general populace.</p>

     <p>The majority of these deaths are preventable; the floods and heatwaves didn’t shape our views on masculinity and femininity, which prod some men to drive into dangerous floodwaters, and others to stay inside out of safety concerns, we did. Disaggregated data of disaster impacts isn’t necessary to drive change, but it helps by revealing trends and patterns in disaster impacts. </p>

     <p>The few quantitative studies that we do have, either population studies, or statistical analyses of disaster mortality, tell more of the story. Globally, females suffer disproportionately higher disaster impacts compared to males such as increased fatalities, a decline in sexual and reproductive health, increased gender-based violence, disruption to education or they are forced to into harmful coping mechanisms such as child marriage or transactional sex (Van der Gaag, 2013); impacts that are more pronounced where the socio-economic gap between the sexes is wider (Neumayer and Plümper, 2007) (Shreve and Fordham, 2017). As we’ve seen from earlier examples, this varies; sometimes, more men and boys die, sometimes, it’s more women and girls. This tells us there isn’t a single, predictable outcome, rather, it’s something we need to consider as a society.</p>

     <p>Disaster mortality is just one indicator among many that tells us we could be handling these events better. Many empirical studies have found shown that women and girls tend to suffer less tangible and longer-term disaster impacts, such as a decline in sexual and reproductive health, increased occurrence of sexual and intimate partner violence, decreased access to education, loss of income and employment, among many others (Bradshaw and Fordham, 2013). For further reading, please explore PLAN International’s Because I am a Girl Reports, which provide quantitative evidence across several different disaster types and localities (van Der Gaag, 2013). Sometimes studies report disproportionate impacts on men and boys; the message here is not that women and girls are more or less vulnerable to negative outcomes; though frequently social and economic inequalities precipitate this, rather, that how we define gender norms influences disaster outcomes. Despite the challenges and lack of planning, there are also inspiring stories of resilience, which I’ll explore in a later post. </p>

      <p>Moving forward, nations that want to improve disaster preparedness, to fulfill the disaster policy requirements, or simply as good practice for preparedness, will need the technology and resources to collect and analyze disaggregated data. I view this as a unique opportunity to collect and analyze data in a way that is more meaningful and productive for society; to better interrogate causal relationships and hazard and place specific solutions. </p>

      <p>Disasters may unfold during natural hazard events, but we have the power to mitigate disaster impacts and our social constructions of gender are an important piece of that puzzle. When the next natural hazard occurs, I’d like to be in a place where we all have equal access to shelter and recovery resources, regardless of biological and social differences.</p>


      <p><strong>Works Cited</strong></p>

        <p>Bradshaw, S. and Fordham, M. 2013. Women, Girls and Disasters: A review for DFID. pp. 1-54.</p>
        <p>Jonkman, S.N. and Kelman, I., 2005. An analysis of the causes and circumstances of flood disaster deaths. Disasters, 29(1), pp.75-97.</p>
        <p>Neumayer, E. and Plümper, T., 2007. The gendered nature of natural disasters: The impact of catastrophic events on the gender gap in life expectancy, 1981–2002. Annals of the Association of American Geographers, 97(3), pp.551-566.</p>
        <p>Shreve, C. & Fordham, M. (2017) Gender and Disasters: Considering Children. GADRRRES Research-into-Practice Brief.</p>
        <p>Zahran, S., Peek, L. and Brody, S.D., 2008. Youth mortality by forces of nature. Children Youth and Environments, 18(1), pp.371-388.</p>
      <br />
      <br />
      <br />
     </div>
     <Footer/>
  </div>
    );
  }
}


export default Gender;
