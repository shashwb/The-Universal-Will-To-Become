import React from 'react'
import Paper from '@material-ui/core/Paper'



/**
 * What is the purpose of these blogs?
 * TODO:
 * we should have a separate 'About' section based on which of the 'Shapes' you're in
 */
const About = () => (
  <>

    <h1>Q: Now What's All This Here About?</h1>
    <divider/>
    <h3>A: It's all just a simple, digital <b>Chrono Synclastic Infundibulum</b>.</h3>

    <p>
      From novelist and scruffy hair enthusiast Kurt Vonnegut's <b><i>Sirens of Titan</i></b>:
    </p>

    <blockquote>
      <p style={{ fontSize: '0.95rem' }}>
        <i>
        "<b>Chrono</b>" means time. "<b>Synclastic</b>" means curved towards the same side in all directions, like the skin of an orange. "<b>Infundibulum</b>" is what ancient Romans like Julius Caesar and Nero called a funnel...
        </i>

        <br/>
        <br/>

        <i>
          These places are where all the different kinds of truths fit togther as nicely as the parts in your solar watch [...] existing as wave phenomena - apparently pulsaing in a distrorted spiral with its origin in the Sun and its terminal in Betelgeuse.
        </i>"
      </p>
    </blockquote>

    <p>
      Minus the cosmic science fiction, <b>Chrono Synclastic Infundibulums</b> are locations in the universe where <i>subjective truths</i> and <i>capital "T" Truths</i> can coelesce without contradiction. They are an aggregation of all of our stories, which happen to take three fundamental shapes.
    </p>

    
    <p>
      <ol>
        <li>The stories we tell about our <b>surroundings</b>; the world.</li>
        <li>The stories we tell about <b>each other</b>.</li>
        <li>The stories we tell about <b>ourselves</b>. </li>
      </ol>
    </p>

    <p>
      Like shards of broken class, each of these yarns we weave take distinct shapes that fit together to create perception of ourselves. We end up being a <b><i>Wabi Sabi</i></b> pottery bowl of our collective stories on all three levels. Our thoughts, desires and opinions are all the result of the <b>Shapes of our Stories</b>.
    </p>


    <div style={{ margin: 'auto', maxWidth: '500px', width: '100%' }}>
      <Paper>
        <img style={{ marginBottom: '0px' }} src="https://www.theschooloflife.com/thebookoflife/wp-content/uploads/2016/01/Kintsugi-bowl-honurushi-number-32.jpg"></img>
        <figcaption style={{ marginBottom: '0px' }} >
          <p style={{ marginBottom: '0px', color: '#928f8f', fontSize: '0.8rem' }}>Fig.1 - Wabi Sabi pottery. The cracks are filled with gold, symbolizing the acceptance of imperfections. In this case, each shard is a story. Together, with a little cosmic glue, we have the sum total of what we think, which is who we are.</p>
        </figcaption>
      </Paper>
    </div>
    <br/>


    <p>
      This blog is a loose collection <i>essay</i>, <i>videos</i> and <i>podcasts</i> serving as unsophisticated hot takes on <i>movies</i>, <i>video games</i>, <i>novels</i> and <i>philosophy</i> (...well, the fun parts at least). It is an unabashed love letter to all of the sorts of stories we tell.
    </p>

    
    <p>
      <h2><b>In whatever capacity I can, I'd like to explore these stories, marvel at their shapes, and maybe even contribute some of my own.</b></h2>
    </p>


    {/* <divider/>
    <p style={{ margin: 'auto' }}>...</p>
    <divider/>
    <br/>
    <div style={{ margin: 'auto', maxWidth: '700px', width: '100%' }}>
      <Paper>
        <img style={{ marginBottom: '0px' }} src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Hibernia_locomotive.png"></img>
        <figcaption style={{ marginBottom: '0px' }} >
          <p style={{ marginBottom: '0px', color: '#928f8f', fontSize: '0.8rem' }}>Fig.2 - A shape that a story can take. Our stories are the <b>coal</b> being thrown into the cosmic <i>Steam Locomotive</i>.

The <b>Firemen</b> tending to the flames are the artists and scientists and philosophers and directors and novelists that we follow.</p>
        </figcaption>
      </Paper>
    </div>
    <br/>
    <br/> */}

    <p>I'm still a bit foggy on the exact location of the closest <b>Chrono-Synclastic Infundibulum</b> to Earth, unfortunately ... If anyone knows a good inter-galactic literary agent, let's do lunch.</p>

    <p>Oh, And consider donating, I can't imagine postage to Uranus is cheap.</p>


    <br/>
    <br/>
  </>
)

export default About
