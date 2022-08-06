import React from 'react';

import Typography from "core/shared/components/Typography";

import { Specialist } from "../../models/specialists.model";
import { Card, ColumnBlock, RowBlock, AvatarPlug } from './styled';

export const SpecialistCard: React.FC<Specialist> = ({
    name, address, gender, speciality, acceptNew, experience, price
}) => {
    return (
        <Card>
            <AvatarPlug />
            <ColumnBlock>
                <RowBlock>
                    <Typography.Text>{name}</Typography.Text>
                    <Typography.Text color={'note'}>{gender}</Typography.Text>
                </RowBlock>
                <RowBlock>
                    <Typography.Text>Address: {address}</Typography.Text>
                </RowBlock>
                <RowBlock>
                    <Typography.Text>{speciality}</Typography.Text>
                    <Typography.Text color={'note'}>{experience} year{experience === 1 ? '' : 's'} experience</Typography.Text>
                </RowBlock>
                <RowBlock>
                    <Typography.Text>Price: ${price} / session</Typography.Text>
                </RowBlock>
            </ColumnBlock>
        </Card>
    )
}