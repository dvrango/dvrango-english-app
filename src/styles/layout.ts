import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

export const MainCard = styled.main`
  width: 100%;
  max-width: 56rem;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  border: 4px solid rgba(255, 255, 255, 0.5);

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

export const AdminContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

export const AdminMainCard = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;