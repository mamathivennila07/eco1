import './index.css'

const Filter = props => {
  const {
    ratingList,
    categoryOptions,
    rat,
    cat,
    s,
    ins,
    cha,
    clear,
    activerat,
    activecat,
  } = props
  const renderrate = () => {
    return (
      <div>
        <ul>
          {ratingList.map(each => (
            <li onClick={() => rat(each.ratingId)} key={each.ratingId}>
              <img src={each.imageUrl} className="ye" />
            </li>
          ))}
        </ul>
      </div>
    )
  }
  const rendercat = () => {
    return (
      <div>
        <ul>
          {categoryOptions.map(each => (
            <li onClick={() => cat(each.categoryId)} key={each.categoryId}>
              <p className="ge">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  const renderinput = () => {
    return (
      <div>
        <input
          className="ih"
          type="text"
          value={s}
          onChange={cha}
          onKeyDown={ins}
          placeholder="search"
        />
      </div>
    )
  }

  return (
    <div className="ew">
      {renderinput()}
      {rendercat()}
      {renderrate()}
      <button type="button" onClick={clear}>
        Clear Filters
      </button>
    </div>
  )
}
export default Filter
