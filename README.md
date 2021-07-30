# MusicThing

## Todo

- login / view app
  - a login page & an app page. the app requires the user to login to view. authentication & authorization setup on server.
- basic client layout
  - styling, etc...
- spotify settings
  - add spotify api to user settings, display user's spotify playlists in UI
- custom playlists
  - allow user to add & delete custom playlists
  - allow user to nest playlists
- ...

## Server appSettings.json

I'm leaving appSettings.json out of git so that the secret used to genrate JWTs
is hidden. TODO: find a better way.

```
{
  "AppSettings": {
    "Secret": "the secret",
    "RefreshTokenTTL": 2
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}
```