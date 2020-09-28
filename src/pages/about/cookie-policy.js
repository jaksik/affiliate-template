import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../../components/seo"
import Layout from '../../components/layout'

const CookiePolicyPage = ({ data }) => {
    console.log("data: ", data)
    return (
        <Layout>

            <div className="content-wrapper">

                <div className="content-container">
                    <h1>                    Cookie Policy for Epic National Parks</h1>
                    <p>
                        This is the Cookie Policy for Epic National Parks, accessible from epicnationalparks.com

                        What Are Cookies

                        As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.

                        For more general information on cookies, please read "What Are Cookies". Information regarding cookies from this Cookies Policy are from the Privacy Policy Generator.

                        How We Use Cookies

                        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.

                        Disabling Cookies

                        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the Cookies Policy Generator from CookiePolicyGenerator.com.

                        The Cookies We Set

                        Email newsletters related cookies

                        This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.

                        Forms related cookies

                        When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.

                        Site preferences cookies

                        In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.

                        Third Party Cookies

                        In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.

                        This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.

                        For more information on Google Analytics cookies, see the official Google Analytics page.

                        More Information

                        Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.

                        However if you are still looking for more information then you can contact us through one of our preferred contact methods:

                        Email: epicnationalparks@gmail.com
                    </p>

                </div>
            </div>
        </Layout>
    )
}

export default CookiePolicyPage

export const query = graphql`
query {
  landingBackground: file(relativePath: { eq: "porsche.jpg" }) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`