import React from 'react';

import { Grid } from './styled';

export const SpecialistsGrid: React.FC<{ children: JSX.Element[] | undefined }> = ({ children }) => (
    <Grid>
        {children}
    </Grid>
)
