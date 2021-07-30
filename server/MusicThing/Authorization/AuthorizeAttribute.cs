using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using MusicThing.Entities;

namespace MusicThing.Authorization
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var allowAnonymous = context.ActionDescriptor.EndpointMetadata.OfType<AllowAnnonymousAttribute>().Any();
            if (allowAnonymous)
                return;

            var user = (User)context.HttpContext.Items["User"];
            if (user == null)
                context.Result = new JsonResult(new { message = "Unauthorized" })
                {
                    StatusCode = StatusCodes.Status401Unauthorized
                };
        }
    }
}