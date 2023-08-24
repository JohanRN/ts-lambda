import { schemaCard } from "shema/card.shema";

class Card {
    constructor(
        public email: string,
        public card_number: string,
        public expiration_year: number,
        public expiration_month: number,
        public cvv?: string,
    ) {
        const { error } = schemaCard.validate({
            email: this.email,
            card_number: this.card_number,
            cvv: this.cvv,
            expiration_year: this.expiration_year,
            expiration_month: this.expiration_month
        });
        if (error) {
            throw new Error('Validation failed: ' + error.details.map((d: any) => d.message).join(', '));
        };
    }
    return() {
        return new Card(
            this.email,
            this.card_number,
            this.expiration_year,
            this.expiration_month,
            this.cvv
        );
    }
}

export default Card;