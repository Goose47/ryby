import {useState} from 'react';
import {Wrapper} from '../components/Wrapper';
import {Table} from '@gravity-ui/uikit';

export const Pedigree = () => {
    const tableData = useState([]);
    const columns = [
        {id: 'id', title: 'ID животного'},
        {id: 'name', title: 'Name'},
        {id: 'coordinates', title: 'Coordinates'},
        {id: 'creationDate', title: 'Creation Date'},
        {id: 'realHero', title: 'Real Hero'},
        {id: 'hasToothpick', title: 'Has Toothpick'},
        {id: 'impactSpeed', title: 'Impact Speed'},
        {id: 'minutesOfWaiting', title: 'Minutes of Waiting'},
        {id: 'weaponType', title: 'Weapon Type'},
        {id: 'mood', title: 'Mood'},
        {id: 'carCool', title: 'Car Cool'},
        {id: 'actions', title: 'Actions'},
    ];

    return (
        <Wrapper>
            <Table
                data={tableData}
                columns={columns}
                emptyMessage="No data at all ¯\_(ツ)_/¯"
            ></Table>
        </Wrapper>
    );
};
