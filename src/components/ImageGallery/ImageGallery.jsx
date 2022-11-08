import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          toggleModal={() => toggleModal(tags, largeImageURL)}
        />
      ))}
    </GalleryList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
