export interface UserAccount {
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string
};

export interface SearchFlightData {
  originPlace: string,
  outbound: Date,
  destinationPlace: string
}

export interface ListPlaceData {
  PlaceId: string,
  PlaceName: string,
  CountryId: string,
  RegionId?: string,
  CityId: string,
  CountryName: string
}
