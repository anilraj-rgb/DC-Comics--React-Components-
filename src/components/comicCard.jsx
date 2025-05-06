const ComicCard = ({ thumb, series }) => {

    return (
      <div className='comic-card'>
        <img src={thumb} alt="" />
        <h5>{series}</h5>
      </div>
    )
  }
  
  export default ComicCard