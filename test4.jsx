import React from 'react';
import axios from 'axios';

//styles

const divCss = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '44px'
  }
  const inputCss = {
    height: '30px',
    borderRadius: '25px',
    border: 'solid 1px #3975ff',
    textIndent: '10px',
    margin: '22px'
  }
  const BtnCss = {
    height: '30px',
    borderRadius: '25px',
    border: 'solid 1px #3975ff',
    background: '#3975ff',
    width: '100px',
    color: 'white'
  }


export default class Palindrome extends React.Component {
    state = {
        input: '',
        isPalindrome: ''
    }

    InputChange = (event) => {
        this.setState({input: event.target.value});
    }

     checkIs = async () => {
        await axios.post(`http://localhost/test1.php`,{"input": this.state.input})
        .then(resp =>{
            if(Boolean(resp.data.substring(resp.data.length - 6 ,resp.data.length - 2))){
                this.setState({isPalindrome: 'Is a Palindrome'});
            }else{
                this.setState({isPalindrome: 'Is not a Palindrome'});
            }
        }).catch(err =>{
            console.log(err);
        });
    }
    
    render() {
        return (
            <div style={divCss}>
                <h1>Palindrome</h1>
                <input 
                    placeholder='Enter the phrase'
                    type="text"
                    style={inputCss} 
                    value={this.state.input}
                    onChange={this.InputChange}/>
                <button style={BtnCss} onClick={this.checkIs}>Check</button>
                {this.state.isPalindrome == ''? <></> : <h3>{this.state.isPalindrome}</h3>}
            </div>
        )
    }
}