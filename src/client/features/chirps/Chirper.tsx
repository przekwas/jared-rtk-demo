//@ts-nocheck
import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addChirp } from './chirps-slice';

const Chirper = () => {

	const dispatch = useDispatch();
	const chirps = useSelector(state => state.chirps.list);

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
