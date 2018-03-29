import React, {Component} from 'react';

class ListItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }
    }

    toggleShow(){
        this.setState({
            showDetails: !this.state.showDetails
        });
        this.renderDetails();
    }

    renderDetails(){
        if(this.state.showDetails){
            return (
                <ul className='collection'>
                    <li className='collection-item'>{this.props.item.details}</li>
                </ul>
            )
        }

        return null;
    }

    render(){
        const parStyle = {display: 'flex', alignItems: 'center'};

        const {item, index, del} = this.props;
        return (
            <li key={index} indexnum={index} style={parStyle} className='collection-item row' onClick={this.toggleShow.bind(this)}>
                <div className='col s8'>
                {item.title}
                {this.renderDetails()}
                </div>
                <div className='col s4 right-align'>
                    <button className='btn-floating red lighten-1' onClick={()=>del(del)}><i className='material-icons'>delete</i></button>
                </div>
            </li>
        )
    }
}

export default ListItem;