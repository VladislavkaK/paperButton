import React, { Component } from 'react';

class PaperBtnTrue extends React.Component {
    render() {
        return (
            
            <div className="paper-btn paper-btn-false">
                <input type="radio" name="answer" id="no-answer" />
                
                <label for="no-answer">Ложь</label>
            </div>    
              
        );
    }
}

export default PaperBtnTrue;