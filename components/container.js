import styled from 'styled-components';
import {padding, flexbox} from 'styled-system';

export default function Container({ children }) {
    return <div padding={padding} flexbox={flexbox}>{children}</div>
  }
  