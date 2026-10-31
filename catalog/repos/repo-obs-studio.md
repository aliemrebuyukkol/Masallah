# OBS Studio (`obsproject/obs-studio`)

- **GitHub:** [https://github.com/obsproject/obs-studio](https://github.com/obsproject/obs-studio)
- **Homepage / Demo:** [https://obsproject.com](https://obsproject.com)
- **License:** GPL-2.0
- **Stars:** 78,708
- **Language:** C

## Installation

```bash
brew install --cask obs
```

## Key Features

- Primary domain: Video (J. Video / Motion / Generative Toolchain)
- Core stack: C/C++, OBS Studio, obs-websocket, NVENC / VideoToolbox
- License verified: GPL-2.0
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
# Record lossless MKV segment & trigger scene switch via obs-websocket CLI
obs-cmd --websocket obsws://localhost:4455 scene switch "3D_WebGL_Capture"
obs-cmd --websocket obsws://localhost:4455 recording start
```
