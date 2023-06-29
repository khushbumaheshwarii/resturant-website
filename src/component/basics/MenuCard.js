import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
  return (
<>
    {menuData.map((curElem) => {
        return(
        <>
        
            <section className="main-card--cointainer" key={curElem.id}>
                <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle"> {curElem.id} </span>
                        <span className="card-auther subtle"> {curElem.category} </span>
                        <h2 className="card-tiltle"> {curElem.name} </h2>
                        <span className="card-description subtle">
                        {curElem.description}
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src= {curElem.image} alt="" className="card-media" />
                    <span className="card-tag">Order Now..</span>
                </div>
                </div>
            </section>
        
        </>
        )
    })}
   
</>
  )
}

export default MenuCard