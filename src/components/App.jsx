import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import * as API from '../services/api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Notification from './Notification/Notification';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
    showModal: false,
    largeImageURL: null,
    tags: null,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchData(query, page);
    }
  }

  fetchData = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const response = await API.fetchData(query.toLowerCase(), page);

      if (page === 1) {
        this.setState(prevState => ({
          items: [...response],
        }));
      } else {
        this.setState(prevState => ({
          items: [...prevState.items, ...response],
        }));
      }

      if (response.length === 0) {
        return toast.warn(
          'Search Failure. There is no images for your query. Please enter other query.'
        );
      }
    } catch {
      const message = 'Oops, something went wrong ...';
      this.setState({ error: message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchbarSubmit = query => {
   if (this.state.query.toLowerCase() !== query.toLowerCase()) {
      this.setState({ query, page: 1, items: [] });
    } else {
      this.setState({ page: 1 });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (tags, largeImageURL) => {
   const { showModal } = this.state;

    showModal
      ? this.setState(({ showModal }) => ({
          showModal: !showModal,
          tags: null,
          largeImageURL: null,
        }))
      : this.setState(({ showModal }) => ({
          showModal: !showModal,
          tags,
          largeImageURL,
        }));
  };

  render() {
    const { items, isLoading, showModal, largeImageURL, tags, error } =
      this.state;
    const { handleSearchbarSubmit, loadMore, toggleModal } = this;

    return (
      <Container>
        <Searchbar onSubmit={handleSearchbarSubmit} />

        {error ? (
          <Notification message={error} />
        ) : (
          <>
            {isLoading && <Loader />}
            {items.length > 0 && !isLoading && (
              <>
                <ImageGallery images={items} toggleModal={toggleModal} />
                <Button onClick={loadMore} />
              </>
            )}

            {showModal && (
              <Modal url={largeImageURL} alt={tags} onClose={toggleModal} />
            )}

            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              theme="dark"
            />
          </>
        )}
      </Container>
    );
  }
}
