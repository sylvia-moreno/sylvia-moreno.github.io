const { expect } = require('chai');
const { describe, it } = require('mocha');
const getCard = require( '../utils/get-card');

describe("Get Cards", () => {
    it("should correctly renders all 76 cards", () => {
        // Given
        const expectedCards = [{
                "color": "red",
            "id": 0,
            "number": 0,
            "state": null,
          },
          {
            "color": "red",
            "id": 2,
            "number": 1,
            "state": null,
          },
          {
            "color": "red",
            "id": 3,
            "number": 1,
            "state": null,
          },
          {
            "color": "red",
            "id": 4,
            "number": 2,
            "state": null,
          },
          {
            "color": "red",
            "id": 5,
            "number": 2,
            "state": null,
          },
          {
            "color": "red",
            "id": 6,
            "number": 3,
            "state": null,
          },
          {
            "color": "red",
            "id": 7,
            "number": 3,
            "state": null,
          },
          {
            "color": "red",
            "id": 8,
            "number": 4,
            "state": null,
          },
          {
            "color": "red",
            "id": 9,
            "number": 4,
            "state": null,
          },
          {
            "color": "red",
            "id": 10,
            "number": 5,
            "state": null,
          },
          {
            "color": "red",
            "id": 11,
            "number": 5,
            "state": null,
          },
          {
            "color": "red",
            "id": 12,
            "number": 6,
            "state": null,
          },
          {
            "color": "red",
            "id": 13,
            "number": 6,
            "state": null,
          },
          {
            "color": "red",
            "id": 14,
            "number": 7,
            "state": null,
          },
          {
            "color": "red",
            "id": 15,
            "number": 7,
            "state": null,
          },
          {
            "color": "red",
            "id": 16,
            "number": 8,
            "state": null,
          },
          {
            "color": "red",
            "id": 17,
            "number": 8,
            "state": null,
          },
          {
            "color": "red",
            "id": 18,
            "number": 9,
            "state": null,
          },
          {
            "color": "red",
            "id": 19,
            "number": 9,
            "state": null,
          },
          {
            "color": "blue",
            "id": 20,
            "number": 0,
            "state": null,
          },
          {
            "color": "blue",
            "id": 22,
            "number": 1,
            "state": null,
          },
          {
            "color": "blue",
            "id": 23,
            "number": 1,
            "state": null,
          },
          {
            "color": "blue",
            "id": 24,
            "number": 2,
            "state": null,
          },
          {
            "color": "blue",
            "id": 25,
            "number": 2,
            "state": null,
          },
          {
            "color": "blue",
            "id": 26,
            "number": 3,
            "state": null,
          },
          {
            "color": "blue",
            "id": 27,
            "number": 3,
            "state": null,
          },
          {
            "color": "blue",
            "id": 28,
            "number": 4,
            "state": null,
          },
          {
            "color": "blue",
            "id": 29,
            "number": 4,
            "state": null,
          },
          {
            "color": "blue",
            "id": 30,
            "number": 5,
            "state": null,
          },
          {
            "color": "blue",
            "id": 31,
            "number": 5,
            "state": null,
          },
          {
            "color": "blue",
            "id": 32,
            "number": 6,
            "state": null,
          },
          {
            "color": "blue",
            "id": 33,
            "number": 6,
            "state": null,
          },
          {
            "color": "blue",
            "id": 34,
            "number": 7,
            "state": null,
          },
          {
            "color": "blue",
            "id": 35,
            "number": 7,
            "state": null,
          },
          {
            "color": "blue",
            "id": 36,
            "number": 8,
            "state": null,
          },
          {
            "color": "blue",
            "id": 37,
            "number": 8,
            "state": null,
          },
          {
            "color": "blue",
            "id": 38,
            "number": 9,
            "state": null,
          },
          {
            "color": "blue",
            "id": 39,
            "number": 9,
            "state": null,
          },
          {
            "color": "green",
            "id": 40,
            "number": 0,
            "state": null,
          },
          {
            "color": "green",
            "id": 42,
            "number": 1,
            "state": null,
          },
          {
            "color": "green",
            "id": 43,
            "number": 1,
            "state": null,
          },
          {
            "color": "green",
            "id": 44,
            "number": 2,
            "state": null,
          },
          {
            "color": "green",
            "id": 45,
            "number": 2,
            "state": null,
          },
          {
            "color": "green",
            "id": 46,
            "number": 3,
            "state": null,
          },
          {
            "color": "green",
            "id": 47,
            "number": 3,
            "state": null,
          },
          {
            "color": "green",
            "id": 48,
            "number": 4,
            "state": null,
          },
          {
            "color": "green",
            "id": 49,
            "number": 4,
            "state": null,
          },
          {
            "color": "green",
            "id": 50,
            "number": 5,
            "state": null,
          },
          {
            "color": "green",
            "id": 51,
            "number": 5,
            "state": null,
          },
          {
            "color": "green",
            "id": 52,
            "number": 6,
            "state": null,
          },
          {
            "color": "green",
            "id": 53,
            "number": 6,
            "state": null,
          },
          {
            "color": "green",
            "id": 54,
            "number": 7,
            "state": null,
          },
          {
            "color": "green",
            "id": 55,
            "number": 7,
            "state": null,
          },
          {
            "color": "green",
            "id": 56,
            "number": 8,
            "state": null,
          },
          {
            "color": "green",
            "id": 57,
            "number": 8,
            "state": null,
          },
          {
            "color": "green",
            "id": 58,
            "number": 9,
            "state": null,
          },
          {
            "color": "green",
            "id": 59,
            "number": 9,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 60,
            "number": 0,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 62,
            "number": 1,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 63,
            "number": 1,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 64,
            "number": 2,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 65,
            "number": 2,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 66,
            "number": 3,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 67,
            "number": 3,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 68,
            "number": 4,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 69,
            "number": 4,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 70,
            "number": 5,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 71,
            "number": 5,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 72,
            "number": 6,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 73,
            "number": 6,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 74,
            "number": 7,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 75,
            "number": 7,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 76,
            "number": 8,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 77,
            "number": 8,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 78,
            "number": 9,
            "state": null,
          },
          {
            "color": "yellow",
            "id": 79,
            "number": 9,
            "state": null,
          },
        ];
        const cardsLength = 76;

        // When
        const cards = getCard();

        // Then
        expect(cards).to.eql(expectedCards);
        expect(cards).to.have.lengthOf(cardsLength);
    });
});