using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using System;
using GeoGuesserAPI.DbContexts;
using GeoGuesserAPI.Dtos;
using GeoGuesserAPI.Models;
using Microsoft.AspNetCore.Components.Forms;

namespace GeoGuesserAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DataController(AppDbContext _context) : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get(long id)
        {
            var data = await _context.Maps.FindAsync(id);
            if (data == null) return NotFound();
            return Ok(data);
        }
        [HttpPost]
        public IActionResult GetRandom(List<long> playedLevelIds)
        {
            try
            {
                var maps = new List<MapModel>();
                maps.AddRange(_context.Maps);
                maps = maps.Where(x => !playedLevelIds.Contains(x.Id)).ToList();
                if (maps.Count == 0) return NotFound();
                var data = maps[new Random().Next(0, maps.Count)];
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(string url)
        {
            try
            {
                var data = await GetMapModelFromUrl(url);
                await _context.Maps.AddAsync(data);
                await _context.SaveChangesAsync();
                return Ok(data.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        private async Task<MapModel> GetMapModelFromUrl(string url)
        {
            string panoIdPattern = @"!1s([^!]+)";
            string latPattern = @"!2m2!1d([^!]+)";
            string lonPattern = @"!2m2!1d[^!]+!2d([^!]+)";

            string panoramaId = Regex.Match(url, panoIdPattern).Groups[1].Value;
            double latitude = double.Parse(Regex.Match(url, latPattern).Groups[1].Value.Replace(".", ","));
            double longitude = double.Parse(Regex.Match(url, lonPattern).Groups[1].Value.Replace(".", ","));

            using HttpClient client = new HttpClient();
            var response = await client.GetAsync(
                $"https://api.bigdatacloud.net/data/reverse-geocode-client?latitude={latitude}&longitude={longitude}&localityLanguage=en");
            response.EnsureSuccessStatusCode();
            var data = await response.Content.ReadFromJsonAsync<ReverseGeoCodeDto>();

            if (data == null) throw new Exception("country not found");

            return new MapModel()
            {
                PanoramaId = panoramaId,
                Lat = latitude,
                Long = longitude,
                Country = data.countryName
            };
        }
    }
}
