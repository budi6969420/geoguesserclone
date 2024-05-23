using System.ComponentModel.DataAnnotations;

namespace GeoGuesserAPI.Models
{
    public class MapModel
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string? PanoramaId { get; set; }
        [Required]
        public double Lat { get; set; }
        [Required]
        public double Long { get; set; }

        public string? Country { get; set; }
    }
}
