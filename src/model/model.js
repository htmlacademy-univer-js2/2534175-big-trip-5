import { getRandomPoint } from "../mock/points.js";
import { mockDestinations } from "../mock/destinations.js";
import { mockOffers } from "../mock/offers.js";

const POINT_COUNT = 3;
export default class PointModel{
    points = Array.from({length:POINT_COUNT}, getRandomPoint);
    destinations = mockDestinations;
    offers = mockOffers;

    getPoints() {
        return this.points;
    }

    getDestinations() {
        return this.destinations;
    }

    getOffers() {
        return this.offers;
    }

    getDestinationsById(id) {
        const allDestinations = this.getDestinations();
        return allDestinations.find((item) => item.id === id);
    }

    getOffersByType(type) {
        const allOffers = this.getOffers();
        return allOffers.find((item) => item.type === type);
    }

    getOffersById(type, itemsId) {
        const OffersType = this.getOffersByType(type);
        return OffersType.offers.filter((item) => itemsId.find((id) => item.id === id));
    }
}
