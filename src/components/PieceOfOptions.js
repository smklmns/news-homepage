import React from 'react'

const PieceOfOptions = ({picture, firstString, secondString, thirdString}) => {
  return (
   
    <div className='pieceOfOptionsBox'>
          <img src={picture} alt=""/>
      <div>
        <p>{firstString}</p>
        <p>{secondString}</p>
        <p>{thirdString}</p>
        </div>
    </div>
   
  )
}

export default PieceOfOptions