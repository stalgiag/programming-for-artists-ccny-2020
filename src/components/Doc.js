import React from 'react';

export default function Doc(props) {
    return <iframe className={props.className} id={props.id} src={props.src}></iframe>;
}
  