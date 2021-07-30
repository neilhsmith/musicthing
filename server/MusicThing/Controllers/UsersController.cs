using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusicThing.Authorization;
using MusicThing.Models.Users;
using MusicThing.Services;

namespace MusicThing.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model, ipAddress());
            setTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [AllowAnnonymous]
        [HttpPost("refresh-token")]
        public IActionResult RefreshToken()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var response = _userService.RefreshToken(refreshToken, ipAddress());
            setTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [HttpPost("revoke-token")]
        public IActionResult RevokeToken(RevokeTokenRequest model)
        {
            var token = model.Token ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required" });

            _userService.RevokeToken(token, ipAddress());

            return Ok(new { message = "Token revoked" });
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();

            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userService.GetById(id);

            return Ok(user);
        }

        [HttpGet("{id}/refresh-tokens")]
        public IActionResult GetRefreshTokens(int id)
        {
            var user = _userService.GetById(id);

            return Ok(user.RefreshTokens);
        }


        // helpers

        private void setTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };
            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }

        private string ipAddress()
        {
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
                return Request.Headers["X-Forwarded-For"];

            return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
        }
    }
}