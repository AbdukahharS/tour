import { useState } from 'react'
import { MdClose } from 'react-icons/md'

const imgs = [
  'photo_2022-12-11_14-09-35.jpg',
  'photo_2022-12-11_14-10-41.jpg',
  'photo_2022-12-11_14-56-42.jpg',
  'photo_2022-12-11_14-57-02.jpg',
  'photo_2022-12-12_12-26-59.jpg',
  'photo_2022-12-12_14-44-33.jpg',
  'photo_2022-12-12_14-45-05.jpg',
  'photo_2022-12-12_14-45-39.jpg',
  'photo_2022-12-12_21-41-08.jpg',
  'photo_2022-12-12_22-10-55.jpg',
  'photo_2022-12-13_13-37-45.jpg',
  'photo_2022-12-13_19-02-46.jpg',
  'photo_2022-12-13_19-48-27.jpg',
  'photo_2022-12-14_20-42-05.jpg',
  'photo_2022-12-14_20-59-24.jpg',
  'photo_2022-12-15_08-19-37.jpg',
  'photo_2022-12-15_08-19-44.jpg',
  'photo_2022-12-15_11-27-49.jpg',
  'photo_2022-12-16_13-42-07.jpg',
]

const Gallery = () => {
  const [img, setImg] = useState(null)

  const handleClick = (i) => {
    setImg(imgs[i])
  }

  const handleClose = () => {
    setImg(null)
  }

  return (
    <>
      <div id='gallery'>
        <h2>Fotogalereya</h2>
        <div className='cont'>
          {imgs.map((img, i) => (
            <div
              onClick={() => handleClick(i)}
              key={i}
              className='card'
              style={{
                background: `url(${require(`../images/gallery/${img}`)})`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div
        className='modal'
        style={{ display: img !== null ? 'flex' : 'none' }}
      >
        <div className='cont'>
          {img !== null && (
            <img src={require(`../images/gallery/${img}`)} alt='Gallery' />
          )}
          <button className='close' onClick={handleClose}>
            <MdClose />
          </button>
        </div>
      </div>
    </>
  )
}

export default Gallery
