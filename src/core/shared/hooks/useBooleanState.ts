import { useMemo, useState } from 'react';

export const useBooleanState = (defaultValue: boolean) => {
    const [state, setState] = useState(defaultValue || false);
    const stateSetters = useMemo(() => ({
            reverseState: () => setState((prev) => !prev),
            setToFalse: () => setState(false),
            setToTrue: () => setState(true),
        }), [])
    return { state, ...stateSetters };
}