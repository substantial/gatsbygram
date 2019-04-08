import React from "react"
import { Helmet } from "react-helmet"
import { say } from 'cowsay-browser'
import { rhythm } from "../utils/typography"
import Layout from "../layouts"

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cowTalk: ''};
  }

  componentDidMount() {
    const cowTalk = say({text: 'Gatsbygram is an example website built with the JavaScript web'})
    this.setState({cowTalk})
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>About Gatsbygram</title>
        </Helmet>
        <div
          css={{
            padding: rhythm(3 / 4),
          }}
        >
          <h1 data-testid="about-title">About Gatsbygram</h1>
          <pre>{this.state.cowTalk}</pre>
          <p>
            The code for the site lives at
            {` `}
            <a
              href="https://github.com/substantial/gatsbygram"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/substantial/gatsbygram
            </a>
          </p>
          <p>
            <a href="https://www.gatsbyjs.org/blog/gatsbygram-case-study/">
              Read a case study on how Gatsbygram was built
            </a>
          </p>
          <p>
            <img
              css={{
                width: "100%",
                height: "auto",
              }}
              src="https://res.cloudinary.com/schmitzc/image/upload/c_limit,f_auto,w_885/v1554746909/adele.jpg"
              alt="Adele"
            />
          </p>
          <p>
            <video
              autoPlay
              loop
              playsInline
              muted
              poster="https://res.cloudinary.com/schmitzc/image/upload/v1554747225/dog-dancing.jpg"
            >
              <source src="https://res.cloudinary.com/schmitzc/image/upload/v1554747225/dog-dancing.webm" type="video/webm" />
            </video>
          </p>
        </div>
      </Layout>
    )
  }
}

export default About
