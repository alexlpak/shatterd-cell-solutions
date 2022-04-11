import { Children, isValidElement, cloneElement } from 'react';

export const getChildrenWithAddedProps = (children, props) => {
    return Children.toArray(children).map(child => {
        if (isValidElement(child)) {
            const newElement = cloneElement(child, props);
            return newElement;
        }
        else return child;
    });
};