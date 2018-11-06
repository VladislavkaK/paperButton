import React, { Component } from 'react';
import PaperBtnTrue from './PaperBtnTrue';
import PaperBtnFalse from './PaperBtnFalse';

class YesNoSelector extends React.Component {
    render() {
        return (
            <div className="yes-no-selector">
               <PaperBtnTrue /> 
               <PaperBtnFalse />
            </div>
        );
    }
}

export default YesNoSelector;