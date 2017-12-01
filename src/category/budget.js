import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory } from './actions';
import BudgetForm from './budgetForm';

class Budget extends PureComponent {

  componentDidMount() {
    this.props.addCategory({ name: 'rent', amount: 1700 });
  }

  handleAdd = budget => {
    this.props.addCategory(budget);
  }
  handleUpdate = budget => {
    this.props.updateCategory(budget);
  }
  handleRemove = id => {
    this.props.removeCategory(id);
  }

  render() {
    const { budgets } = this.props;
    return (
      <div>
        <BudgetForm onComplete={this.handleAdd}/>
        <ul>
          {budgets.map(budget => (
            <li key={budget._id}>
              <h3>
                For:{budget.name} Amount: ${budget.amount}
                <button onClick={() => this.handleRemove(budget._id)}>X</button>
              </h3>  
              <BudgetForm budget={budget} text="Update"
                onComplete={this.handleUpdate}/>
            </li>))}
        </ul>  
      </div>  
    );
  }
}

function mapStateToProps(state) {
  return {
    budgets: state
  };
}

export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory }
)(Budget);