import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

export class NewCategory extends PureComponent {
  
  state={
    redirect: false
  }

  handleAdd = category => {
    this.props.addCategory(category);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.target;
    const category = {
      name: elements.name.value,
      budget: elements.budget.value,
      expenses: []
    };
    this.setState({ redirect: true });
    this.handleAdd(category);
  }

  render() {
    return (
      <StyledDiv>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="name"/>
          <input name="budget" placeholder="budget"/>
          <button type="submit">Add</button>
        </form> 
        { this.state.redirect && (<Redirect to="/categories"/>) }
      </StyledDiv>
    );
  }
}

export default connect( 
  state => ({ categories: state }),
  { addCategory }
)(NewCategory);

const StyledDiv = styled.div`
text-align: center;
`;