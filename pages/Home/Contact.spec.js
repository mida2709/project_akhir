import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Contact from './Contact';

const mockStore = configureStore([]);

describe('Contact Component', () => {
  let store;
  let originalOpen;
  let originalLocation;

  beforeEach(() => {
    store = mockStore({
      contact: {
        email: 'https://www.google.com/intl/id/gmail/about/',
        instagram: 'https://www.instagram.com/instagram/',
        phone: '+123456789',
      },
    });

    originalOpen = window.open;
    window.open = jest.fn();

    originalLocation = window.location;
    delete window.location;
    window.location = { href: '' };
  });

  afterEach(() => {
    window.open = originalOpen;
    window.location = originalLocation;
  });

  it('Membuka Link Instagram di tab baru ketika di klik', () => {
    render(
      <Provider store={store}>
        <Contact />
      </Provider>
    );

    const instagramButton = screen.getByTestId('instagram-button');

    fireEvent.click(instagramButton);

    expect(window.open).toHaveBeenCalledWith('https://www.instagram.com/instagram/', '_blank');
  });

  it('Membuka Link Gmail di tab baru ketika di klik', () => {
    render(
      <Provider store={store}>
        <Contact />
      </Provider>
    );

    const gmailButton = screen.getByTestId('gmail-button');

    fireEvent.click(gmailButton);

    expect(window.location.href).toBe('https://www.google.com/intl/id/gmail/about/');
  });

  it('Membuka Link nomor telepon di tab baru ketika di klik', () => {
    render(
      <Provider store={store}>
        <Contact />
      </Provider>
    );

    const phoneButton = screen.getByTestId('phone-button');

    fireEvent.click(phoneButton);

    expect(window.location.href).toBe('tel:+123456789');
  });
});