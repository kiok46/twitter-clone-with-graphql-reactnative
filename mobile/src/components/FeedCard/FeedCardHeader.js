import React from 'react';
import styled from 'styled-components/native';

import { fakeAvatar } from '../../utils/constants';

const Root = styled.View`
  height: 50;
  flexDirection: row;
  alignItems: center;
`;

const CardAvatarContainer = styled.View`
  flex: 0.2;
`;

const CardAvatar = styled.Image`
  height: 40;
  width: 40;
  borderRadius: 20;
`;

const CardMetaContainer = styled.View`
  flex: 1;
`;

const CardMetaTopContainer = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: flex-start;
  alignItems: center;
`;

const CardMetaBottomContainer = styled.View`
  flex: 0.8;
  alignItems: flex-start;
  justifyContent: center;
`;

const CardMetaFullName = styled.Text`
  fontSize: 16;
  fontWeight: bold;
  color: ${props => props.theme.SECONDARY};
`;

const CardMetaText = styled.Text`
  fontSize: 14;
  fontWeight: 600;
  color: ${props => props.theme.LIGHT_GRAY};
`;

function FeedCardHeader() {
  return (
     <Root>
      <CardAvatarContainer>
        <CardAvatar source={{ uri: fakeAvatar }} />
      </CardAvatarContainer>
      <CardMetaContainer>
        <CardMetaTopContainer>
          <CardMetaFullName>
            Emanuel Quimper
          </CardMetaFullName>
          <CardMetaText style={{ marginLeft: 5 }}>
            @QuimperEmanuel
          </CardMetaText>
        </CardMetaTopContainer>
        <CardMetaBottomContainer>
          <CardMetaText>
            1 day ago
          </CardMetaText>
        </CardMetaBottomContainer>
      </CardMetaContainer>
    </Root>
  )
}

export default FeedCardHeader;
