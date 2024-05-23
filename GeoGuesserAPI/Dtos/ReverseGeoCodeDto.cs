// ReSharper disable InconsistentNaming
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
namespace GeoGuesserAPI.Dtos
{
    public class ReverseGeoCodeDto
    {
        public float latitude { get; set; }
        public string lookupSource { get; set; }
        public float longitude { get; set; }
        public string localityLanguageRequested { get; set; }
        public string continent { get; set; }
        public string continentCode { get; set; }
        public string countryName { get; set; }
        public string countryCode { get; set; }
        public string principalSubdivision { get; set; }
        public string principalSubdivisionCode { get; set; }
        public string city { get; set; }
        public string locality { get; set; }
        public string postcode { get; set; }
        public string plusCode { get; set; }
        public Fips fips { get; set; }
        public Localityinfo localityInfo { get; set; }

        public class Fips
        {
            public string state { get; set; }
            public string county { get; set; }
            public string countySubdivision { get; set; }
            public string place { get; set; }
        }

        public class Localityinfo
        {
            public Administrative[] administrative { get; set; }
            public Informative[] informative { get; set; }
        }

        public class Administrative
        {
            public string name { get; set; }
            public string description { get; set; }
            public string isoName { get; set; }
            public int order { get; set; }
            public int adminLevel { get; set; }
            public string isoCode { get; set; }
            public string wikidataId { get; set; }
            public int geonameId { get; set; }
        }

        public class Informative
        {
            public string name { get; set; }
            public string description { get; set; }
            public string isoName { get; set; }
            public int order { get; set; }
            public string isoCode { get; set; }
            public string wikidataId { get; set; }
            public int geonameId { get; set; }
        }

    }
}
