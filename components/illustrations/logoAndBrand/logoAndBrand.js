import * as React from 'react';
import Brand from '../brand';
import Logo from '../logo';
import { LogoAndBrandWrapper } from './logoAndBrand.style';



export default function LogoAndBrand(props) {

  return (
    <LogoAndBrandWrapper><Logo /><Brand style={{ marginLeft: '20px' }} /></LogoAndBrandWrapper>
  );
}
