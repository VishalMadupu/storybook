import React from "react";
import InputForm from "../../app/components/inputform/input";
import '../../storybook/input/input.stories.scss';

export default {
    title: 'Input',
    component: InputForm
};

export const Small = () => (
    <InputForm size="small" placeholder="small size" />
);

export const Medium = () => (
    <InputForm size="medium" placeholder="medium size" />
);

export const Large = () => (
    <InputForm size="large" placeholder="large size" />
);
