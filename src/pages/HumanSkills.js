import React from 'react';
import { Row, Col, Card, Rate, Icon } from 'antd';
import { Link } from "react-router-dom";

const HumanSkills = ({match}) => (
  <Row className= "content-row">
    <Row type="flex">
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/persevere`}>
            <Card
            className='card-skill'
            cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>Persévérer</strong></span>
              <Rate disabled allowHalf defaultValue={4} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
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
            <span><strong>Intégrité</strong></span>
            <Rate disabled allowHalf defaultValue={4} />
            <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
          </div>
          </Card>
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
            <span><strong>Empathie</strong></span>
            <Rate disabled allowHalf defaultValue={4} />
            <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
          </div>
          </Card>
        </Row>
      </Col>
    </Row>
  </Row>
);

export default HumanSkills;
