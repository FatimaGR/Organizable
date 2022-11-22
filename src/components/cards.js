function Cards({card}) {
  return(
    <div>
      <div>
        <p>Name</p>
        <button>X</button>
      </div>
      <form>
        <input placeholder="new card"/>
        <a>+</a>
      </form>
    </div>
  )
}

export default Cards;