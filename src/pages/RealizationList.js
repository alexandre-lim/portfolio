import React from 'react';
import { Row, Col, Card, Rate, Icon } from 'antd';
import { Link } from "react-router-dom";
import itschoolLogo from '../itschool.png';

const RealizationList = ({match}) => (
  <Row className= "content-row">
    <Row type="flex">
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/itschool`}>
            <Card
            className='card-skill'
            cover={<img alt="example" src={itschoolLogo} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>ItSchool</strong></span>
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={5} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Card
          className='card-skill'
          cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />}
          hoverable={true}
          >
          <div style={{ textAlign: 'center', lineHeight: '25px' }}>
            <span><strong>Syllabo</strong></span>
            <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={5} style={{ color: 'red' }}/>
          </div>
          </Card>
        </Row>
      </Col>
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Card
          className='card-skill'
          cover={<img alt="example" src="https://cdn5-prod.bns.ovh/ent/assets/images/main/logo.png?version=1529317303" />}
          hoverable={true}
          >
          <div style={{ textAlign: 'center', lineHeight: '25px' }}>
            <span><strong>Beneylu</strong></span>
            <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={5} style={{ color: 'red' }}/>
          </div>
          </Card>
        </Row>
      </Col>
    </Row>
  </Row>
);

export default RealizationList;