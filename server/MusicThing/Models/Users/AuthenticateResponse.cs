using System.Text.Json.Serialization;
using MusicThing.Entities;

namespace MusicThing.Models.Users
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string JwtToken { get; set; }

        [JsonIgnore] // refresh token is return in http only cookie
        public string RefreshToken { get; set; }

        public AuthenticateResponse(User user, string jwtToken, string refreshToken)
        {
            Id = user.Id;
            Username = user.Username;
            JwtToken = jwtToken;
            RefreshToken = refreshToken;
        }
    }
}