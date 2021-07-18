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

## Folder Structure
```
- .vscode/
- client/
  - musicthing/
    - build/
    - public/
    - src/
- server/
  - src/
    - MusicThing.Api/
  - tests/
    - MusicThing.Api.UnitTests/
```

- vscode's launch settings will launch both the client and server. 
- client tests are in the same directory as the app. the server separates tests into a separate project.