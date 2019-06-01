import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LastAddedItem from './lastAddedItem'

import './index.scss'
export class LastAdded extends Component {

  render() {
    const { projects } = this.props
    return (
      <section className='last-added'  >
        <Container>
          <h2 className='title-block text-gray'>You might like:</h2>
          <Row>
            {projects && projects.map((project, i) => {
              return (
                <Col sm={4} key={i}><LastAddedItem project={project} /></Col>
              )
            })}
          </Row>
        </Container>
      </section>
    )
  }
}


export default LastAdded