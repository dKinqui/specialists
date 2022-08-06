import styled from 'styled-components';

type AvailableTextSizes = 'huge' | 'small'

const TextSizeNames: Record<string, AvailableTextSizes> = {
    HUGE: 'huge',
    SMALL: 'small'
}

type AvailableColors = 'note'

const TextColorNames: Record<string, AvailableColors> = {
    NOTE: 'note',
}

interface TextProps {
    size?: AvailableTextSizes,
    color?: AvailableColors,
}


export const Text = styled.p<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case TextSizeNames.HUGE:
        return 18
      case TextSizeNames.SMALL:
        return 11
      default:
        return 14
    }
  }};
  color: ${({ color }) => {
    switch (color) {
      case TextColorNames.NOTE:
        return '#807e7e'
      default:
        return '#000000'
    }
  }};
  line-height: 1.1;
`

export default {
    Text,
}