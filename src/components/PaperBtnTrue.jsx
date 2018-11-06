import React, { Component } from 'react';

class PaperBtnTrue extends React.Component {
    render() {
        return (
            
            <div className="paper-btn paper-btn-true">
                <input type="radio" name="answer" id="yes-answer" />
                <label for="yes-answer">Правда</label>
            </div>
              
        );
    }
}

export default PaperBtnTrue;