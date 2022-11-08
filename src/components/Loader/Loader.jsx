import ContentLoader from 'react-content-loader';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ContentLoader
        speed={5}
        width={630}
        height={510}
        viewBox="0 0 630 510"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="150" height="150" />
        <rect x="160" y="0" rx="4" ry="4" width="150" height="150" />
        <rect x="320" y="0" rx="4" ry="4" width="150" height="150" />
        <rect x="480" y="0" rx="4" ry="4" width="150" height="150" />
        <rect x="0" y="160" rx="4" ry="4" width="150" height="150" />
        <rect x="160" y="160" rx="4" ry="4" width="150" height="150" />
        <rect x="320" y="160" rx="4" ry="4" width="150" height="150" />
        <rect x="480" y="160" rx="4" ry="4" width="150" height="150" />
        <rect x="0" y="320" rx="4" ry="4" width="150" height="150" />
        <rect x="158" y="320" rx="4" ry="4" width="150" height="150" />
        <rect x="318" y="320" rx="4" ry="4" width="150" height="150" />
        <rect x="478" y="320" rx="4" ry="4" width="150" height="150" />
        <rect x="228" y="489" rx="4" ry="4" width="172" height="20" />
      </ContentLoader>
    </Container>
  );
};

export default Loader;
