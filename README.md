# Task Overview

You are working on a React-based admin dashboard and need to implement a global theme toggle system for light and dark mode. The system must use React Context for state management, synchronize with localStorage to persist user preference, and provide instant visual theme updates across all components, notably within a Header and a Card. The toggle control must be accessible and support keyboard navigation.

## Guidance

- Use only core React features and plain CSS for styling and theming.
- Maintain global theme state using React Context.
- Store and retrieve the theme preference from localStorage on load and on updates.
- Ensure at least Header and Card components fully reflect theme changes instantly.
- Design the toggle button for accessibility, including ARIA attributes and keyboard support.
- The application should reflect any theme changes throughout the entire component tree in real time.

## Objectives

- Implement a Theme Context that manages and provides theme state globally.
- Set up instant theme switching via an accessible toggle.
- Persist the user's theme preference using localStorage.
- Ensure that both the Header and Card components are theme-aware and update instantly.
- Guarantee accessibility for the theme toggle button (ARIA, keyboard navigability).

## How to Verify

- Confirm that toggling the theme button updates the visual theme throughout the app immediately.
- Check that the preference persists after refreshing or reopening the browser window.
- Ensure the Header and Card components update their appearance according to the selected theme.
- Verify the toggle button can be used with a keyboard and includes appropriate ARIA labels.
- Ensure the current theme is consistently reflected across all parts of the application.