import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './add_form';
import listData from '../data/todo_items';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: listData,
            noItems: ''
        }
    }
    addItem(item){
        this.setState({
            list: [...this.state.list, item],
            noItems: ''
        })
    }
    deleteItem(index){
        const newList = [...this.state.list];
        newList.splice(index,1);
        this.setState({
            list: newList
        },() => {
            if(this.state.list.length == 0){
                this.emptyText();
            }
        });
    }
    emptyText(){
        this.setState({
            noItems: 'No items on to-do list'
        })
    }
    
    render(){
        return (
        <div className='container'>
            <h1 className='center'>To Do List</h1>
            <AddForm add={this.addItem.bind(this)} />
            <List list={this.state.list} delete={this.deleteItem.bind(this)} />
            <h3 className='center'>{this.state.noItems}</h3>
        </div>
        )
    }
};

export default App;
