import React from 'react';


import Layout from '../components/Layout';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';
import Produits from '../components/Produits';
import ListePage from '../components/ListePage';

import anime from 'animejs/lib/anime.es.js';

import heroImage from '../assets/images/car.svg';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from 'react-reveal/Zoom';

const path = require(`path`)
const slash = require(`slash`)




// Then in a component:



const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/01.jpg'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/02.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/gallery/fulls/03.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/images/gallery/fulls/04.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/05.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/05.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/06.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/07.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/07.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/08.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/08.jpg'),
    title: 'Give away',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/gallery/fulls/09.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/09.jpg'),
    title: 'Moment',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/images/gallery/fulls/10.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/10.jpg'),
    title: 'Serenity',
    desc: 'Be one with the purity',
    full: true,
  },
];


const IndexPage = (props) => (
  <Layout>
    <div > <img src={heroImage} alt="" id="imgIntro" /></div>
    
    
    <div id="wrapper" className="contSite">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
           
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>dezdezMagna sed nullam nisl adipiscing</h2>
        </header>
    

 
        <div className="content">
          <Zoom> <p>
            <strong>Lorem ipsum dolor</strong>plouf plour tramama sit amet consectetur adipiscing
            elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad
            plouf litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            tristique libero eu nibh porttitor amet fermentum. Nullam venenatis
            erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p></Zoom>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
    <div className="col-sm-6">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <p>
  <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
    </div>
     dez
    
    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
    
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
    <Img fixed={props.data.imageFive.childImageSharp.fixed} />
        </div>
      </section>

      <section>
        <header>
          <h2>Feugiat consequat tempus ultrices</h2>
        </header>
        <div className="content">
          <p>
            <strong>Etiam tristique libero</strong> eu nibh porttitor amet
            fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
            condimentum.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-laptop">Consequat tempus</li>
            <li className="icon fa-bolt">Etiam adipiscing</li>
            <li className="icon fa-signal">Libero nullam</li>
            <li className="icon fa-gear">Blandit condimentum</li>
            <li className="icon fa-map-marker">Lorem ipsum dolor</li>
            <li className="icon fa-code">Nibh amet venenatis</li>
          </ul>
          <p>
            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Ultrices erat magna sed condimentum</h2>
        </header>
        <div className="content">
          <p>
            <strong>Integer mollis egestas</strong> nam maximus erat id euismod
            egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>

          <section>
            <header>
              <h3>Erat aliquam</h3>
              <p>
                Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
                etiam consequat, et lorem adipiscing sed dolor sit amet,
                consectetur amet do eiusmod tempor incididunt ipsum suspendisse
                ultrices gravida.
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>Nisl consequat</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam sed facilisis ante interdum congue. Integer mollis, nisl
                amet convallis, porttitor magna ullamcorper, amet mauris. Ut
                magna finibus nisi nec lacinia ipsum maximus.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Lorem gravida</h3>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>Duis sed adpiscing veroeros amet</h2>
        </header>
        <div className="content">
          <p>
            <strong>Elements</strong> This starter contains all elements for a
            page. Check it out
          </p>
          <ul className="actions">
            <li>
              <Link to="/Elements" className="button primary large">
                Goto Elements Page
              </Link>
            </li>
       <li>
              <Link to="/Autre-page" className="button primary large">
             Autre page
              </Link>
    
     <Link to="/blog" className="button primary large">
            blog
              </Link>
            </li>
            {/* <li>
              <a href="/#" className="button large">
                Learn More
              </a>
            </li> */}
          </ul>
        </div>
      </section>
<section>
  
    <div className="container">
   
  <ListePage />
    </div>
    </section><section>
  
    <div className="container">
   
    <Produits />
    </div>
    </section>
      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
<script
  dangerouslySetInnerHTML={{
    __html: `
            var name = 'world';
            console.log('Hello ' + name);
        `,
  }}
/>
  </Layout>
     
);





export default IndexPage;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


export const pageQuery = graphql`
query {
  imageOne: file(relativePath: {  eq: "two.png" } ) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(relativePath: { eq: "two.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageThree: file(relativePath: { eq: "three.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  } 
imageFour: file(relativePath: { eq: "three.png" }) {
    childImageSharp {
     fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
      }
    }
  }
   imageFive:  file(relativePath: { eq: "three.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
}
`






if (typeof window !== `undefined`) {

// Create a timeline with default parameters
var tl = anime.timeline({
  easing: 'easeInCubic',
  duration: 2500
});

// Add children
tl
.add({
  targets: '#imgIntro',
  scaleX: [0, 4.5], // from 100 to 250
    scaleY: [0, 4.5], // from 100 to 250
     translateX: [-100, 100], // from 100 to 250
      translateY: [-10, 100], // from 100 to 250
    duration:2000,
     complete: function(anim) {
console.log('fini');
  }
})
.add({
  targets: '#imgIntro',
   scaleX: [ 4.5, 100], // from 100 to 250
    scaleY: [ 4.5, 100], // from 100 to 250
      translateX: [100, -500], // from 100 to 250
delay:2000,
    duration:500

})
.add({
   
  targets: '.contSite',
  translateX: [-2000, 0]
  
   
});


}






