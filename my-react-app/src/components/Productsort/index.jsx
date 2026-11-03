import './index.css'

const Productsort = props => {
  const {sort, active, updates} = props
  const gr = event => {
    updates(event.target.value)
  }
  return (
    <div className="yc">
      <h1 className="ty">My products</h1>
      <div className="t">
        <p className="uiss">Sort by</p>
        <select value={active} onChange={gr} className="pvc">
          {sort.map(each => (
            <option value={each.optionId}>{each.displayText}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default Productsort
