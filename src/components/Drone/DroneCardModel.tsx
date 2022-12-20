import { TablerIcon } from '@tabler/icons';

export type DroneCardProps  = {
    cardData: {
        droneName: string
        photoUrl: string;
        link: string;
        information: string;
        price: number
        data: {
            label: string;
            icon: TablerIcon;
        }[];
    }
}
