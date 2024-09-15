import React from 'react';
import { useCustomHook } from './hooks/useCustomHook';
import ClassLifecycle from './ClassLifecycle';

export default function HOCClassLifeCycle(props) {
    const url = useCustomHook('https://stackoverflow.com/');
    return <ClassLifecycle {...props} url={url} />
}