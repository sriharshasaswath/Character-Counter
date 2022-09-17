import './index.css'

const CounterItem = props => {
  const {commentDetails} = props
  const {name} = commentDetails

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div>
          <div className="username-time-container">
            <p className="username">
              {name}: <span>{name.length}</span>
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CounterItem
