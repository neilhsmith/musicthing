using System;

namespace MusicThing.Authorization
{
    [AttributeUsage(AttributeTargets.Method)]
    public class AllowAnnonymousAttribute : Attribute
    {

    }
}