import React, { Component } from 'react';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />npm 
            <h1>Thank You For Your Submission</h1>
            <p>we really appreciate your time giving us a feedback.</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
