import * as React from 'react';
import { Container as ContainerWrapper } from './container.style.js';

export default function Container(props) {

  return (
    <ContainerWrapper>{props.children}</ContainerWrapper>
  );
}
