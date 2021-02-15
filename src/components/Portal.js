import React, { Component } from 'react';
import { Button, Form, Header, Segment, Portal } from 'semantic-ui-react'
import Reveal from './Review'


export default class Portals extends Component {
  state = { open: false }

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  render() {
    const { open } = this.state

    return (
      <>
          <Form.Button
            content='Left Wing'
            disabled={open}
            positive
            onClick={this.handleOpen}
          />

          <Portal  open={open}>
            <Segment
              style={{
                left: '-0.5%',
                position: 'fixed',
                top: '10%',
                zIndex: 1000,
                height:1000
              }}
            > <Reveal/>
              <Header>LOGISTICSpro</Header>
              <p>Your Online Suply Chain Solution</p>
              <p>im under construction!!!!!!!!!! </p>
              <p>powered by xylem</p>
              <p>To close, simply click the close button or click away</p>

              <Button
                content='Close Right Wing'
                negative
                onClick={this.handleClose}
              />
            </Segment>
          </Portal>
        </>
    )
  }
}
