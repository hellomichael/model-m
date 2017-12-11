import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import * as ScrollMagic from 'scrollmagic'

import styles from './index.scss'

class Section extends Component {
  state = {
    id: _.uniqueId(),
    scene: false,
    progress: 0,
    height: 0
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)

    this.setState({
      scene: new ScrollMagic.Scene({
        triggerElement: `#section-${this.state.id}`,
        duration: this.sectionRef.clientHeight,
        triggerHook: 0
      }).addTo(this.props.controller)
    })
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    this.setState({ progress: Math.round(this.state.scene.progress() * 100) })
  }

  render() {
    const { children, className } = this.props

    let classnames = classNames({
      [styles.section]: true,
      [`${className}`]: className ? true : false
    })

    return (
      <div
        id={ `section-${this.state.id}` }
        ref={ (section) => (this.sectionRef = section) }
        className={ classnames }
      >
        <h1 className={ styles.progress }>{this.state.progress}%</h1>
        {children}
      </div>
    )
  }
}
export default Section
