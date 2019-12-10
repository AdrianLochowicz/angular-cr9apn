export class Wydatek {

    constructor(
        public kategoria: string,
        public kwota: number,
        public opis: string,
        public data: Date) {
    }
}
export const KATEGORIE = [ 'Tankowanie', 'Myjnia', 'Serwis', 'Inne' ];
