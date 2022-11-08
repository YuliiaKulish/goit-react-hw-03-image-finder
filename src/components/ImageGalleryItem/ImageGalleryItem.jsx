import PropTypes from 'prop-types';

import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, toggleModal }) => {
  return (
    <GalleryItem onClick={toggleModal}>
      <GalleryItemImg src={src} alt={alt} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
