import React from 'react';
import './button.css';
export type ButtonProps = {
    onClick: (e: React.SyntheticEvent) => void;
    label: string;
    children: React.ReactNode;
    className: string;
};
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare enum ButtonSizes {
    xsmall = 0,
    small = 1,
    spemdium = 2,
    medium = 3,
    large = 4,
    xlarge = 5,
    jumbo = 6
}
//# sourceMappingURL=button.d.ts.map