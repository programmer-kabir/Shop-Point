import React from 'react'

const ProductsSidebar = ({categories,category}) => {
  // console.log(category);
    const currentData = categories.find(cate => cate.category === category)
    if (!currentData) {
      return <p>Loading category details...</p>; //todo when loading set 
    }
  return (

    <div>
       <h2 >{currentData.category}</h2>
       <p>
       {currentData.subCategory.map((subCat, index) => (
          <p key={index}>{subCat}</p>
        ))}
       </p>
    </div>
  )
}

export default ProductsSidebar