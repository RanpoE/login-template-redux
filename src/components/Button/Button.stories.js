import React from "react";
import Button from "./Button";


export default {
    title: 'Button',
    component: Button,
}

export const Primary = () => <Button variant="primary" text="Button" event={() => alert('Storybook basics')} />
export const Secondary = () => <Button variant="secondary" text="Button" />
export const Success = () => <Button variant="success" text="Button" />
export const Danger = () => <Button variant="danger" text="Button" />