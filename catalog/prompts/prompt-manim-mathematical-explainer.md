# Manim Mathematical Proof, Animated Diagram & Algorithmic Explainer

- **Category:** Video
- **Source:** [Manim Community](https://github.com/ManimCommunity/manim)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Video, Motion, Creative Coding, Prompt, Example

## Description

Generates a complete Python `Scene` for Manim Community animating LaTeX equation morphs (`TransformMatchingTex`), live `ValueTracker` derivatives, and architectural flow diagrams.

## Original Prompt

```text
Write a Manim Python script that animates a Fourier series or calculus derivative graph with LaTeX equations.
```

## Masallah Optimized Prompt

```text
Write a production-ready Manim Community (`github.com/ManimCommunity/manim`) Python script covering four educational explainer patterns:
1. Equation Morphing: Use `MathTex` with explicit double-brace token isolation and `TransformMatchingTex` to smoothly morph the Fourier series / Euler identity step by step without jarring alpha fades.
2. Dynamic ValueTracker Graph: Construct `Axes`, plot $f(x) = \sin(x) \cdot e^{-0.2x}$, attach a `ValueTracker(t)`, and use `always_redraw` to render the moving secant/tangent line and area Riemann rectangles in real time.
3. System Architecture Diagram: Animate directed data flow packets along `CurvedArrow` edges between labeled rounded nodes.
4. Output both the executable `manim -pqh explainer.py ExplainerScene` Python code and a synchronized browser Canvas preview of the exact mathematical curve and tangent animation.
```

## Example Input

Explain how a Fourier epicycle sum approximates a square wave alongside its LaTeX series expansion.

## Example Output

Complete Manim `Scene` Python script + interactive browser Fourier epicycle & tangent visualizer.
