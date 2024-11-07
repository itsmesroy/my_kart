import React from "react";

class AddItem extends React.Component {
  state = {};
  constructor(props){
    super(props);
    this.state={
        productName:"",
        productPrice:0,
    }
  }
  render() {
    return (
      <form className="row m-4" onSubmit={(e)=>{
        e.preventDefault();
        this.props.addItem(this.state.productName,Number(this.state.productPrice));
   
      }
      }>
        <div className=" mb-3 col-4 col-4">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text "
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="productName"
            onChange={(e)=>{
                this.setState({productName:e.currentTarget.value})
            }}
          />          
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e)=>{
                this.setState({productPrice: Number(e.currentTarget.value)})
            }}
          />
        </div>
        
        <button type="submit" className="btn btn-primary col-3">
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
