import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addChirp } from './chirps-slice';

const Chirper = () => {

	const dispatch = useAppDispatch();
	const chirps = useAppSelector(state => state.chirps.list);

    const [val, setVal] = useState('');

    const submit = () => {
        dispatch(addChirp({ name: 'Jared', msg: val }));
        setVal('');
    }

	return (
		<div>
            <input value={val} onChange={e => setVal(e.target.value)} />
            <button onClick={submit}>add</button>
			{chirps.map(chirp => (
				<div>
					{chirp.name}: {chirp.msg}
				</div>
			))}
		</div>
	);
};

export default Chirper;
