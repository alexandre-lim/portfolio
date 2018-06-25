import React from 'react';
import { Row, Col, Card, Rate, Icon } from 'antd';
import { Link } from "react-router-dom";
import itschoolLogo from '../itschool.png';
import beneylu from '../beneylu.png';
import abbeal from '../abbeal.png';
import improvit from '../improvit.png';
import alpha from '../alpha.png';
import maintenance from '../maintenance.png';

const RealizationList = ({match}) => (
  <Row className= "content-row">
    <Row type="flex">
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/itschool`}>
            <Card
            className='card-skill'
            cover={<img alt="ItSchool logo" src={itschoolLogo} />}
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
          <Link to={`${match.url}/beneylu`}>
            <Card
            className='card-skill'
            cover={<img alt="Beneylu logo" src={beneylu} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>Beneylu</strong></span>
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={5} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/syllabo`}>
            <Card
            className='card-skill'
            cover={<img alt="Syllabo logo" src={abbeal} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>Syllabo</strong></span>
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={5} style={{ color: 'red' }}/>
            </div>
            </Card>
            </Link>
        </Row>
      </Col>
    </Row>
    <br/>
    <Row type="flex">
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/improvit`}>
            <Card
            className='card-skill'
            cover={<img alt="Improvit logo" src={improvit} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>Improv'IT</strong></span>
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={5} style={{ color: 'red' }}/>
            </div>
            </Card>
            </Link>
        </Row>
      </Col>
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/alpha`}>
            <Card
            className='card-skill'
            cover={<img alt="Alpha logo" src={alpha} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>ALPHA</strong></span>
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={3} style={{ color: 'red' }}/>
            </div>
            </Card>
            </Link>
        </Row>
      </Col>
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/maintenance`}>
            <Card
            className='card-skill'
            cover={<img alt="Maintenance logo" src={maintenance} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>TMA</strong></span>
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={3.5} style={{ color: 'red' }}/>
            </div>
            </Card>
            </Link>
        </Row>
      </Col>
    </Row>
  </Row>
);

export default RealizationList;
