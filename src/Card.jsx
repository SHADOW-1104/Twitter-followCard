import './assets/css/Card.css'
export const Card = ({name, user, img}) => {
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
          <button className="tw-followCard-btn" type="button">Follow!</button>
        </aside>
      </article>
    </>
  )
}