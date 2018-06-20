import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const About = (props) => (
  <Row className= "content-row" type="flex" align="middle">
    <Row type="flex" justify="center" style={{ flexGrow: 1 }}>
      <Col span={12}>
        <Card className="card-quote">
          <q>
          Notre vie est un voyage constant, de la naissance à la mort. Le paysage change, les gens changent,
          les besoins se transforment, mais le train continue.
          La vie, c'est le train, ce n'est pas la gare.
          </q>
          <p>- Paulo Coelho</p>
        </Card>
      </Col>
    </Row>
    <Row type="flex" justify="center" style={{ width: '100%'}}>
      <Col span={12}>
        <div style={{ textAlign: 'center', fontSize: '18px'}}><Link to="/about" onClick={props.handleHrefClick}>Qui suis-je ?</Link></div>
      </Col>
    </Row>
</Row>
);

export default About;
