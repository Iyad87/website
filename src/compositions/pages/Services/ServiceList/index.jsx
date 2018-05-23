import React from 'react';

import { Illustration, List, Service, Support, Title } from './styled';
import Subservice from './Subservice';

const ServiceList = () => (
  <List>
    <Service id="approach">
      <Title>Our Approach</Title>
      <Support>
        We help you future proof your business though a new style of consulting,
        ground up. We connect and educate engineering, product and leadership to
        help you navigate digital transformation, grow your business and tackle
        core customer problems. We’re one of the most renowned technology
        companies in Europe.
      </Support>
      <Illustration src="http://placekitten.com/900/400" />
      <Subservice name="Engineering Consultancy">
        We use our capability model to help you gauge your organisation’s
        current maturity. We help you identify any gaps and opportunities for
        improvement in line with your vision. We use our best practice models of
        discovery and delivery to drive success and ensure you have the right
        skills, processes and tools. What’s more we help you build the right
        framework to develop a long lasting engineering culture. We bring
        excellence, fast.
      </Subservice>
      <Subservice name="Product Consultancy">
        We see a tremendous amount of innovation primarily because of
        organisations embracing to be product-driven. AirBnB now includes
        experiences and restaurants to their offering beyond just providing a
        place to stay. Investing to be a product-driven organisation will help
        you to future-proof and tackle areas of growth and innovation head-on.
        <br />
        <br />
        We can help you build the roadmap and ensure clear ways of working
        between the business and the delivery team. We can help you develop
        digital products in an Agile way of working.
      </Subservice>
      <Subservice name="Agile Organisations">
        We use our capability model to help you gauge your organisation’s
        current maturity. We help you identify any gaps and opportunities for
        improvement in line with your vision. We use our best practice models of
        discovery and delivery to drive success and ensure you have the right
        skills, processes and tools. What’s more we help you build the right
        framework to develop a long lasting engineering culture. We bring
        excellence, fast.
      </Subservice>
    </Service>
  </List>
);

export default ServiceList;