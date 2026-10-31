# Blender MCP Agent Prompt: Procedural 3D Studio & Isometric Scene

- **Category:** 3D
- **Source:** [MCP for Blender](https://github.com/ahujasid/mcp-for-blender)
- **Target Model:** Claude 3.7 Sonnet / Cursor + Blender MCP Server
- **License:** MIT
- **Tags:** 3D, Agent Skill, Workflow, Prompt, Example

## Description

Directs an AI agent connected via `mcp-for-blender` to construct a complete Blender scene with three-point area lighting, PBR shader nodes, geometry modifiers, and an orthographic turntable camera.

## Original Prompt

```text
Create a 3D isometric room in Blender with warm lighting and materials using Blender MCP.
```

## Masallah Optimized Prompt

```text
Using the Model Context Protocol tools provided by `mcp-for-blender` (`github.com/ahujasid/mcp-for-blender`), execute a structured 5-step 3D scene construction pipeline in Blender:
1. Scene Hygiene & Camera: Inspect current scene via `get_scene_info`, clear default cube, and create an Orthographic Camera (`ortho_scale = 8.5`) at `location=(7.5, -7.5, 6.2)`, `rotation=(58deg, 0, 45deg)` parented to an Empty turntable rig at the origin.
2. Procedural Geometry (`execute_blender_code`): Generate a modular architectural diorama with Bevel modifiers (`width=0.02, segments=3`) so edges catch specular highlights realistically.
3. Principled BSDF Node Graph: Construct brushed anodized aluminum (`Metallic=0.92, Roughness=0.24`), warm alabaster ceramic (`Subsurface Weight=0.15`), and emissive neon accents (`Emission Strength=8.0`).
4. Three-Point Studio Lighting: Key Area Light (`500W, 3800K warm`), Rim Area Light (`350W, 7500K cool cyan`), and Fill Top Softbox (`150W`).
5. Verification: Configure Cycles GPU rendering (`samples=128`, AgX color management, High Contrast look) and capture viewport preview to verify silhouette readability.
```

## Example Input

Build a stylized hardware synthesizer diorama on an isometric plinth with glowing OLED screen and rotary encoders.

## Example Output

Complete `bpy` Python execution script + MCP tool call sequence producing a Cycles-ready `.blend` scene.
