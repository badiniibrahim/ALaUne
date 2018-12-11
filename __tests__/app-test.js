import React from "react";
import renderer from 'react-test-renderer';
import App from '../app/app';

test('Testing app snapshot', () => {
    const snap = renderer.create(
        <App />
    ).toJSON();

expect(snap).toMatchSnapshot();
})