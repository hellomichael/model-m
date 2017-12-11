import React, { Component } from 'react'
import classNames from 'classnames'
import * as ScrollMagic from 'scrollmagic'

import 'aframe'
import { Entity, Scene } from 'aframe-react'

import Section from '../../components/Section'

import styles from './index.scss'

class Landing extends Component {
  state = {
    controller: new ScrollMagic.Controller(),
    scene: false,
    progress: 0
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)

    this.setState({
      scene: new ScrollMagic.Scene({
        triggerElement: '#landing',
        duration: this.landingRef.scrollHeight - this.landingRef.clientHeight,
        triggerHook: 0
      }).addTo(this.state.controller)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    this.setState({ progress: Math.round(this.state.scene.progress() * 100) })
  }

  render() {
    let classnames = classNames({
      [styles.landing]: true
    })

    return (
      <div
        id={ 'landing' }
        className={ classnames }
        ref={ (landing) => (this.landingRef = landing) }
        onScroll={ this.handleScroll }
      >
        <h1 className={ styles.progress }>{this.state.progress}%</h1>

        <Section controller={ this.state.controller } />

        <Section controller={ this.state.controller }>
          <Scene
            embedded
            vr-mode-ui={ { enabled: false } }
          >
            <Entity
              obj-model={ 'obj: url(/models/keyboard.obj); ' }
              position={ { x: 0, y: 0, z: -50 } }
              rotation={ { x: 0, y: 720 * this.state.progress / 100, z: 0 } }
              wireframe={ true }
            />
          </Scene>
        </Section>

        <Section controller={ this.state.controller }>
          <h2>This is Section 3</h2>
        </Section>
      </div>
    )
  }
}

export default Landing
