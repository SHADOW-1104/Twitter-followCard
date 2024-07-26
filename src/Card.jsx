import { useState } from 'react'
import './assets/css/Card.css'
export const Card = ({name, user, img}) => {

  const [isFollowing, setIsFollowing] = useState(false)
  const [hoverText, setHoverText] = useState('')

  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing ? "tw-followCard-btn isFollowing" : "tw-followCard-btn"


  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const handleHoverEnter = () =>{
    setHoverText(isFollowing? 'Anular ❌' : '')
  }

  const handleHoverLeave = () => {
    setHoverText('')
  }

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
          className="tw-followCard-avatar"
          src={`${img}`}
          alt={`${name} Thumbnail`} />
          <div className="tw-followCard-info">
            <strong className="tw-followCard-infoUserName">{name}</strong>
            <p className="tw-followCard-infoEmail">@{user}</p>
          </div>
        </header>
        <aside className='tw-followCard-aside'>
          <button className={buttonClassName} onMouseLeave={handleHoverLeave} onMouseEnter={handleHoverEnter} onClick={handleClick} type="button">{ hoverText || text}</button>
        </aside>
      </article>
    </>
  )
}