# Manim Mathematical Epicycles & Tangent Derivative Visualizer

Interactive mathematical explainer demonstrating Manim’s ValueTracker and Fourier harmonic epicycle summation ($\sum_{k=1}^{N} \frac{4}{\pi (2k-1)} \sin((2k-1)\omega t)$) with live harmonic count slider.

```tsx
from manim import *
import numpy as np

class FourierEpicycleExplainer(Scene):
    def construct(self):
        axes = Axes(x_range=[0, 2 * PI, PI / 2], y_range=[-1.5, 1.5, 0.5], x_length=7, y_length=3.5)
        formula = MathTex(r"f(t) = \sum_{k=1}^{N} \frac{4}{\pi(2k-1)} \sin((2k-1)\omega t)").to_edge(UP)
        tracker = ValueTracker(0.0)
        wave = always_redraw(lambda: axes.plot(
            lambda x: sum((4 / ( np.pi * (2*k - 1))) * np.sin((2*k - 1) * (x + tracker.get_value())) for k in range(1, 6)),
            color=TEAL_C
        ))
        self.play(Write(formula), Create(axes), Create(wave))
        self.play(tracker.animate.set_value(2 * PI), run_time=6, rate_func=linear)
```
