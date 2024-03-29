import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const State = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell,x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
)

export default State;