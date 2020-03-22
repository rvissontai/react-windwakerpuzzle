import React from 'react';

class Piece extends React.Component {
    render(){
        let model = this.props.model;
        let className = "col-3 " + model.className;

        return (
            <div id={ this.props.id } className={className}>
                <img data-piece={ model.number } className="img-piece" src={ model.src }/>
            </div>
        );
    }
}

export default Piece;