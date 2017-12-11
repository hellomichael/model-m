import React, { Component } from 'react'
import classNames from 'classnames'
import { Container, Row, Col } from 'reactstrap'

import styles from './index.scss'

class Styleguide extends Component {
  render() {
    let classnames = classNames({
      [styles.styleguide]: true
    })

    return (
      <div className={ classnames }>
        <Container>
          <Row>
            <Col>
              <section>
                <h1 className={ styles.heading }>Typography</h1>

                <h1>H1 Heading</h1>
                <h2>H2 Heading</h2>
                <h3>H3 Heading</h3>
                <h4>H4 Heading</h4>
                <h5>H5 Heading</h5>
                <h6>H6 Heading</h6>

                <br />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minima ab eveniet velit?
                  Eligendi magni, id, at ea tempora iusto laudantium, fugit perspiciatis temporibus iste
                  aliquam. Perferendis, fugit deleniti magnam.
                </p>

                <ul>
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                  <li>List item 5</li>
                </ul>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Styleguide
