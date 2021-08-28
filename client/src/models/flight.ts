export interface ISearchFlightData {
  originPlace: string,
  outbound: Date,
  destinationPlace: string
}

export interface IListPlaceData {
  PlaceId: string,
  PlaceName: string,
  CountryId: string,
  RegionId?: string,
  CityId: string,
  CountryName: string
}
