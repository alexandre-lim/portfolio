import React from 'react';
import { Row, Col, Card, Rate, Icon } from 'antd';

const Skills = () => (
  <div className="skills-container">
    <Row className= "content-row">
      <Row type="flex">
        <Col span = {8}>
          <Row type="flex" justify="center">
            <Card
            className='card-skill'
            cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>JavaScript</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
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
              <span><strong>React & Redux</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
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
              <span><strong>HTML 5 & CSS 3</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Row>
        </Col>
      </Row>
    </Row>

    <Row className= "content-row">
      <Row type="flex">
        <Col span = {8}>
          <Row type="flex" justify="center">
            <Card
            className='card-skill'
            cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>JavaScript</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
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
              <span><strong>React & Redux</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
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
              <span><strong>HTML 5 & CSS 3</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Row>
        </Col>
      </Row>
    </Row>
  </div>
);

export default Skills;
