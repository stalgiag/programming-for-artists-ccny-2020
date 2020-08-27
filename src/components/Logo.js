import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default function Logo (){
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "object.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
    return (
        <Img
            className="logo"
            fluid={data.file.childImageSharp.fluid}
            alt="Unknown object made by Sigve Knutson tinted red"
        />
    );

}