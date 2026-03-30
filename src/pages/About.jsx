import "../styles/About.css"
import myVideo from "../assets/aboutvideo.mp4"
import frontView from "../assets/cofflavour-building-at-night.png"
import sideView from "../assets/cofflavour-from-across-the-street.png"
import waitress from "../assets/waitress-serving-coffee.png"

const About = () => {
  return (
    <div className="about-page fade-in">
      
      <section className="about-hero">
        <video className="about-video-bg" src={myVideo} muted playsInline autoPlay loop></video>
        <div className="about-hero-overlay"></div>
        <h1 className="about-hero-title">ABOUT<br />US</h1>
      </section>

      <main className="about-main-content">
        
        <section className="about-section alternate">
          <div className="about-text">
            <h2>Our Origins</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia esse nostrum quibusdam voluptas itaque architecto? Nostrum accusamus perspiciatis dignissimos quasi voluptates expedita laboriosam nam amet. Tempore explicabo velit, ex tempora asperiores ab sed saepe!</p>
          </div>
          <div className="about-image-wrapper">
            <img src={frontView} alt="Front View" className="about-img main-img" loading="lazy" />
          </div>
        </section>

        <section className="about-section">
          <div className="about-image-wrapper">
            <img src={sideView} alt="Side View" className="about-img secondary-img" loading="lazy" />
          </div>
          <div className="about-text">
            <h2>The Experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia esse nostrum quibusdam voluptas itaque architecto? Nostrum accusamus perspiciatis dignissimos quasi voluptates expedita laboriosam nam amet. Tempore explicabo velit, ex tempora asperiores ab sed saepe!</p>
          </div>
        </section>

        <section className="get-to-know-us">
          <div className="get-to-know-container">
            <h1 className="section-title">Get to know us</h1>
            
            <div className="get-to-know-content">
              <div className="get-to-know-img-wrap">
                <img src={waitress} alt="Waitress serving coffee" className="about-img feature-img" loading="lazy" />
              </div>

              <div className="get-to-know-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit, perferendis corporis porro assumenda ducimus deleniti veniam unde eligendi, eaque magni molestias non explicabo voluptates amet cumque nisi labore neque velit architecto deserunt ut officia quia! Corporis cumque quaerat harum.</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}

export default About