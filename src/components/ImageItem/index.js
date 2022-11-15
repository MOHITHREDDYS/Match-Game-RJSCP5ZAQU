import './index.css'

const ImageItem = props => {
  const {imageDetails, checkImageMatched} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickingThumbnail = () => {
    checkImageMatched(id)
  }

  return (
    <li className="image_item">
      <button
        type="button"
        onClick={onClickingThumbnail}
        className="thumbnail_button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail_image" />
      </button>
    </li>
  )
}

export default ImageItem
