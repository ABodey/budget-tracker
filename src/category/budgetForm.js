import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class BudgetForm extends PureComponent {

    static PropTypes = {
      budget: PropTypes.object,
      onComplete: PropTypes.func.isRequired
    }
    
    static defaultProps = {
      text: 'Add'
    }

    constructor(props) {
      super(props);
      const { budget = {} } = props;
      this.state = {
        name: budget.name || null,
        amount: budget.amount || null,
        _id: budget._id || null,
        timestamp: budget.timestamp
      };
    }

    handleSubmit = event => {
      event.preventDefault();
      const { _id, timestamp, name, amount } = this.state;
      this.props.onComplete({ _id, timestamp, name, amount });
    }

    handleChange = ({ target: input }) => {
      this.setState({
        [input.name]: input.value
      });
    }

    render() {
      const { name, amount } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
              Name: <input name="name" value={name} onChange={this.handleChange}/>
          </div>   
          <div>
              Amount: <input name="amount" value={amount} onChange={this.handleChange} />
          </div> 
          <button type="submit">{this.props.text}</button>    
        </form>
      );
    }
}