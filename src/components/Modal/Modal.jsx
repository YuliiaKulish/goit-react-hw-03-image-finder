import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalWindow, Image } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEsc);
  }

  handleKeyEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { url, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWindow>
          <Image src={url} alt={alt} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
