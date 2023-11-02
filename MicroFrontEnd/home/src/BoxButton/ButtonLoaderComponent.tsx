import React from "react";
import { ColorThemeENUM } from "./BoxButton.types";
import styled from "styled-components";

export interface ButtonLoaderTypes {
	height?: number;
	animationDuration: number;
	theme?: ColorThemeENUM
}

export const ButtonLoader = styled.div<{ height: number, animationDuration: number, theme?: ColorThemeENUM }>`
	width: 44px;
	height: ${props => props.height}px;
	display: flex;
	align-items: center;
	justify-content: center;
	display: flex;
	gap: 4px;
	span {
		background-color: ${props => props.theme === ColorThemeENUM.primary ? "var(--dark-blue-10)" : "#474786"};
		display: inline-block;
		height: 8px;
		width: 8px;
		border-radius: 100%;
		animation-name: animateDots;
		animation-duration: ${props => props.animationDuration}s;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
		&:nth-child(1) {
			animation-delay: ${props => (props.animationDuration * 0)}s;
		}
		&:nth-child(2) {
			animation-delay: ${props => (props.animationDuration * 0.16)}s;
		}
		&:nth-child(3) {
			animation-delay: ${props => (props.animationDuration * 0.33)}s;
		}
		&:nth-child(4) {
			animation-delay: ${props => (props.animationDuration * 0.58)}s;
		}
		@keyframes animateDots {
			0% {
				transform: translateY(0px);
				background-color: ${props => props.theme === ColorThemeENUM.primary ? "var(--dark-blue-10)" : "#474786"};
				/* background-color: ${props => props.theme === ColorThemeENUM.primary ? "var(--dark-blue-10)" : "#474786"}; */
			}

			6% {
				background-color: ${props => props.theme === ColorThemeENUM.primary ? "#F0F0F6" : "var(--dark-blue-100)"};
			}

			16% {
				/* transform: translateY(calc((-${props => props.height}/2 + "px") + 4px)); */
				transform: translateY(calc(-${props => props.height/2}px + 4px));
				background-color: ${props => props.theme === ColorThemeENUM.primary ? "#F0F0F6" : "var(--dark-blue-100)"};
			}

			33% {
				transform: translateY(0px);
				background-color: ${props => props.theme === ColorThemeENUM.primary ? "#F0F0F6" : "var(--dark-blue-100)"};
			}

			43% {
				background-color: ${props => props.theme === ColorThemeENUM.primary ? "var(--dark-blue-10)" : "#474786"};	
			}

			100% {
				transform: translateY(0px);
				background-color: ${props => props.theme === ColorThemeENUM.primary ? "var(--dark-blue-10)" : "#474786"};
				/* background-color: ${props => props.theme === ColorThemeENUM.primary ? "var(--dark-blue-10)" : "#474786"}; */
			}
		}
	}
`;


function ButtonLoaderComponent({ height=16, animationDuration, theme }: ButtonLoaderTypes) {
	return (
		<ButtonLoader height={height} animationDuration={animationDuration} theme={theme}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</ButtonLoader>
	);
}

export { ButtonLoaderComponent };
