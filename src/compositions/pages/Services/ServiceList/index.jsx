import React, { Fragment } from 'react';

import PageSection from 'components/PageSection';

import { Illustration, Link, Support, Title } from './styled';
import Subservice from './Subservice';

const ServiceList = () => (
  <Fragment>
    <PageSection id="approach" data-selector="services:our-approach">
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
    </PageSection>
    <PageSection
      gradient
      gradientHeight="100%"
      id="design"
      data-selector="services:design-product"
    >
      <Title>Design &amp; Product</Title>
      <Support>
        A great company continuously finds better solutions to its customers
        biggest problems. Design is the bridge between the two. Great design
        goes deeper than just how something looks, it’s why and how it works,
        for your customers and for your business.
        <Link href="#design">
          Learn more about Design as a key differentiator →
        </Link>
      </Support>
      <Illustration src="http://placekitten.com/900/400" />
      <Subservice name="Design Leadership">
        To continuously go beyond your customers expectations, design must be an
        equal voice within an organisations focus. Design Leadership helps build
        this voice at the heart of your companies process, and enables Design
        Thinking to drive innovation and quality across your organisation.
        <Link href="#design">
          See how design leadership helps drive customer value →
        </Link>
      </Subservice>
      <Subservice name="Design Systems &amp; DesignOps">
        For teams to deliver a great experience continuously, it’s necessary to
        have a toolset that enables an organisation to answer customer problems
        quickly. We’re pioneers in the fields of DesignOps and Design Systems,
        which put a powerful product design toolset at the centre of every team
        within an organisation. This helps you create customer value faster, at
        a higher quality, with a better user experience.
        <Link href="#design">
          Learn how Design Systems and DesignOps help us scale →
        </Link>
      </Subservice>
      <Subservice name="Design Sprints">
        We use our capability model to help you gauge your organisation’s
        current maturity. We help you identify any gaps and opportunities for
        improvement in line with your vision. We use our best practice models of
        discovery and delivery to drive success and ensure you have the right
        skills, processes and tools. What’s more we help you build the right
        framework to develop a long lasting engineering culture. We bring
        excellence, fast.
        <Link href="#design">
          Learn how design sprints help us validate ideas →
        </Link>
      </Subservice>
      <Subservice name="User Interface Design &amp; Branding">
        We use our capability model to help you gauge your organisation’s
        current maturity. We help you identify any gaps and opportunities for
        improvement in line with your vision. We use our best practice models of
        discovery and delivery to drive success and ensure you have the right
        skills, processes and tools. What’s more we help you build the right
        framework to develop a long lasting engineering culture. We bring
        excellence, fast.
        <Link href="#design">
          Learn how User Interface Design &amp; Branding build great connections
          →
        </Link>
      </Subservice>
      <Subservice name="Research, Usability and User Experience">
        We use our capability model to help you gauge your organisation’s
        current maturity. We help you identify any gaps and opportunities for
        improvement in line with your vision. We use our best practice models of
        discovery and delivery to drive success and ensure you have the right
        skills, processes and tools. What’s more we help you build the right
        framework to develop a long lasting engineering culture. We bring
        excellence, fast.
        <Link href="#design">
          Learn how Research and UX Design helps us build the right product →
        </Link>
      </Subservice>
    </PageSection>
    <PageSection id="engineering" data-selector="services:engineering">
      <Title>Engineering</Title>
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
    </PageSection>
    <PageSection
      gradient
      gradientHeight="100%"
      id="training"
      data-selector="services:training"
    >
      <Title>Training</Title>
      <Support>
        A great company continuously finds better solutions to its customers
        biggest problems. Design is the bridge between the two. Great design
        goes deeper than just how something looks, it’s why and how it works,
        for your customers and for your business.
        <Link href="#design">
          Learn more about Design as a key differentiator →
        </Link>
      </Support>
      <Illustration src="http://placekitten.com/900/400" />
      <Subservice name="Node Training">
        We use our capability model to help you gauge your organisation’s
        current maturity. We help you identify any gaps and opportunities for
        improvement in line with your vision. We use our best practice models of
        discovery and delivery to drive success and ensure you have the right
        skills, processes and tools. What’s more we help you build the right
        framework to develop a long lasting engineering culture. We bring
        excellence, fast.
      </Subservice>
      <Subservice name="React Training">
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
      <Subservice name="Design Systems Training">
        For teams to deliver a great experience continuously, it’s necessary to
        have a toolset that enables an organisation to answer customer problems
        quickly. We’re pioneers in the fields of DesignOps and Design Systems,
        which put a powerful product design toolset at the centre of every team
        within an organisation. This helps you create customer value faster, at
        a higher quality, with a better user experience.
      </Subservice>
      <Subservice name="UX Research Training">
        Knowing that you’re solving the right customer problems, and with the
        right user experience is key to growing your product. Great products
        don&apos;t just look good, they enable their users to achieve their
        goals effortlessly. A core part of any cross-functional team, great UX
        and research skills find and define solutions at the intersection
        between business and customer needs.
      </Subservice>
      <Subservice name="UX Design Training">
        Great UI design connects your users with your product. It’s the most
        tactile, direct interaction people will have with your brand, your
        services, and your customer experience. We help brands evolve and grow,
        by formulating brand principles that inform the design and strategy of
        the product.
      </Subservice>
    </PageSection>
  </Fragment>
);

export default ServiceList;
