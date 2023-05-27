import styled from 'styled-components'

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 15rem;
  focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #b6b6b6;
    border-radius: 25px;
    border: 1px solid #8a8a8a;
  }

  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8a8a8a;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #dadada;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }

  :focus::-webkit-slider-runnable-track {
    background: #b6b6b6;
  }

  ::-moz-range-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #b6b6b6;
    border-radius: 25px;
    border: 1px solid #8a8a8a;
  }

  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8a8a8a;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #dadada;
    cursor: pointer;
  }

  ::-ms-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-ms-fill-lower {
    background: #b6b6b6;
    border: 1px solid #8a8a8a;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }

  ::-ms-fill-upper {
    background: #b6b6b6;
    border: 1px solid #8a8a8a;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }

  ::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8a8a8a;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #dadada;
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: #b6b6b6;
  }
  :focus::-ms-fill-upper {
    background: #b6b6b6;
  }
`
