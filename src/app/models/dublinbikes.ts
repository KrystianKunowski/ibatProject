export interface Dublinbikes {
    number: number;
        contractName: string;
        name: string;
        address: string;
        bikeStands: number;
        availableBikeStands: number;
        availableBikes: number;
        status: string;
        banking: boolean;
        bonus: boolean;
        position: Position;
    }
     export interface Position {
         lat: number;
         lng: number;
     }

