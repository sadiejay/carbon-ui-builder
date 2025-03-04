import React from 'react';
import { TextArea } from 'carbon-components-react';
import { CssClasses } from '../types';

export interface TextAreaState {
	type: string;
	id: string | number;
	label: string;
	placeholder?: string;
	value?: string;
	helperText?: string;
	defaultValue?: string;
	disabled?: boolean;
	light?: boolean;
	cssClasses?: CssClasses[];
	codeContext?: {
		name: string;
	};
}

export const UITextAreaInput = ({ state, setState, name }: {
	state: TextAreaState;
	name?: string;
	setState: (state: any) => void;
	setGlobalState: (state: any) => void;
}) => {
	if (state.type !== 'text-area') {
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <></>;
	}

	return <TextArea
		id={state.codeContext?.name}
		name={name}
		value={state.value}
		placeholder={state.placeholder}
		labelText={state.label}
		helperText={state.helperText}
		defaultValue={state.defaultValue}
		disabled={state.disabled}
		light={state.light}
		onChange={(event: any) => setState({ ...state, value: event.imaginaryTarget.value })}
		className={state.cssClasses?.map((cc: any) => cc.id).join(' ')} />;
};
