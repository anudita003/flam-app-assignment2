
Interactive Bézier Curve with Physics & Sensor Control
📌 Project Overview

This project demonstrates an interactive cubic Bézier curve that behaves like a springy rope.
The curve dynamically responds to real-time user input (mouse movement on the web) and moves smoothly using a spring-damping physics model.

The main goal of this assignment is to implement Bézier curve mathematics, tangent computation, and basic physics manually, without using any pre-built Bézier or animation libraries.

🎯 Objectives

Implement a cubic Bézier curve using four control points.

Make the curve interactive using mouse input.

Apply spring and damping physics for smooth, natural motion.

Compute and visualize tangent vectors along the curve.

Render everything in real time (≈60 FPS).

📐 Bézier Curve Implementation

The cubic Bézier curve is defined using four control points:

P₀ and P₃ → Fixed endpoints of the rope

P₁ and P₂ → Dynamic control points that shape the curve

The curve is calculated using the standard cubic Bézier equation:

𝐵
(
𝑡
)
=
(
1
−
𝑡
)
3
𝑃
0
+
3
(
1
−
𝑡
)
2
𝑡
𝑃
1
+
3
(
1
−
𝑡
)
𝑡
2
𝑃
2
+
𝑡
3
𝑃
3
B(t)=(1−t)
3
P
0
	​

+3(1−t)
2
tP
1
	​

+3(1−t)t
2
P
2
	​

+t
3
P
3
	​


The value of t varies from 0 to 1, and the curve is rendered by sampling small increments of t (0.01) and drawing line segments between the computed points.

🧲 Spring-Damping Physics Model

To avoid sudden or jerky motion, the dynamic control points (P₁ and P₂) follow the input position using a spring-damping system.

The physics model used is:

acceleration = -k * (position − target) − damping * velocity
velocity += acceleration
position += velocity


This creates:

Smooth transitions

Rope-like elasticity

Natural delayed motion instead of instant movement

➿ Tangent Vector Visualization

Tangents represent the direction of the curve at a given point.

The derivative of the cubic Bézier curve is used:

𝐵
′
(
𝑡
)
=
3
(
1
−
𝑡
)
2
(
𝑃
1
−
𝑃
0
)
+
6
(
1
−
𝑡
)
𝑡
(
𝑃
2
−
𝑃
1
)
+
3
𝑡
2
(
𝑃
3
−
𝑃
2
)
B
′
(t)=3(1−t)
2
(P
1
	​

−P
0
	​

)+6(1−t)t(P
2
	​

−P
1
	​

)+3t
2
(P
3
	​

−P
2
	​

)

Steps:

Compute derivative at selected t values

Normalize the vector

Draw short line segments along the curve to visualize tangents

🖱️ Interaction

Mouse movement is captured using JavaScript event listeners.

The mouse position acts as the target for control points P₁ and P₂.

Spring physics ensures smooth following behavior.

🎨 Rendering Details

HTML Canvas is used for rendering.

The following elements are drawn:

Bézier curve (rope)

Control points (small red circles)

Tangent vectors (short yellow lines)

The animation runs using requestAnimationFrame, maintaining ~60 FPS.

🚫 Constraints Followed

No pre-built Bézier or physics libraries used.

All math and physics logic implemented manually.

Clean separation of logic:

Math

Physics

Rendering

Input handling

📂 Files Included

index.html – Canvas setup

script.js – Bézier math, physics, rendering, and interaction logic

README.md – Project explanation

Screen recording showing real-time interaction

🎥 Demonstration

A short screen recording (≈20–30 seconds) is included, showing:

The Bézier rope on screen

Mouse interaction

Smooth spring-like motion

Tangent visualization

✅ Conclusion

This project successfully demonstrates the use of Bézier mathematics, basic physics simulation, and real-time interaction to create a dynamic and visually intuitive rope-like curve without relying on external libraries.

Agar chaahe toh bhai:

aur thoda aur academic bana du

ya short viva answers likh du

ya iOS mapping explanation add kar du

Bas bol 😊

bhai wshi likh jo usme likho

Samajh gaya bhai 👍
Tu chaah rahi hai README bilkul assignment ke wording ke according ho, extra gyaan nahi, jo question me likha hai wahi reflect ho.
Neeche assignment-aligned, safe, teacher-friendly README de raha hoon.
👉 Direct copy-paste kar dena.

Interactive Bézier Curve with Physics & Sensor Control
Objective

The objective of this project is to implement an interactive cubic Bézier curve that behaves like a rope reacting to motion input.
The project demonstrates understanding of Bézier curve mathematics, tangent computation, real-time rendering, and basic spring physics.

Problem Statement

A visual simulation is created where a cubic Bézier curve dynamically responds to user input.

On the web, the curve responds to mouse movement.

The curve moves smoothly and behaves like a springy rope when its control points are displaced.

Tangents of the Bézier curve are also visualized.

All Bézier math, tangent calculation, and motion logic are implemented manually, without using any built-in Bézier or physics libraries.

Bézier Curve Math

The curve used is a cubic Bézier curve defined by four control points:

P₀ and P₃ are fixed endpoints.

P₁ and P₂ are dynamic control points.

The curve is calculated using the cubic Bézier equation:

𝐵
(
𝑡
)
=
(
1
−
𝑡
)
3
𝑃
0
+
3
(
1
−
𝑡
)
2
𝑡
𝑃
1
+
3
(
1
−
𝑡
)
𝑡
2
𝑃
2
+
𝑡
3
𝑃
3
B(t)=(1−t)
3
P
0
	​

+3(1−t)
2
tP
1
	​

+3(1−t)t
2
P
2
	​

+t
3
P
3
	​


The value of t ranges from 0 to 1.
Small increments of t are used to sample and render the curve.

Control Points Behavior

P₀ and P₃ remain fixed.

P₁ and P₂ move in response to mouse input.

Instead of moving instantly, the control points follow the input using a spring-damping model for smooth motion.

Spring-Damping Model

To achieve natural rope-like movement, a spring-damping system is applied to the dynamic control points.

The motion is governed by:

acceleration = -k * (position - target) - damping * velocity


This ensures:

Smooth movement

No sudden jumps

Realistic spring-like behavior

Tangent Visualization

Tangent vectors are computed using the derivative of the cubic Bézier curve:

𝐵
′
(
𝑡
)
=
3
(
1
−
𝑡
)
2
(
𝑃
1
−
𝑃
0
)
+
6
(
1
−
𝑡
)
𝑡
(
𝑃
2
−
𝑃
1
)
+
3
𝑡
2
(
𝑃
3
−
𝑃
2
)
B
′
(t)=3(1−t)
2
(P
1
	​

−P
0
	​

)+6(1−t)t(P
2
	​

−P
1
	​

)+3t
2
(P
3
	​

−P
2
	​

)

Tangents are calculated at intervals along the curve.

Each tangent vector is normalized.

Short lines are drawn to visualize the direction of the curve.

Interaction & Rendering

The project is implemented using HTML Canvas and JavaScript.

Mouse movement controls the dynamic control points.

The following elements are rendered:

Bézier curve path

Control points as visible circles

Tangent lines along the curve

Rendering is done in real time using requestAnimationFrame, maintaining approximately 60 FPS.

Rules Followed

No prebuilt Bézier, animation, or physics libraries are used.

All Bézier math and motion logic is implemented manually.

Code is organized into math, physics, rendering, and input handling.

The visualization is interactive and real-time.

Files Submitted

index.html – Canvas setup and structure

script.js – Bézier math, spring physics, rendering, and interaction logic

README.md – Project explanation

Screen recording showing real-time interaction

Demonstration

A short screen recording (maximum 30 seconds) is included, showing:

The Bézier curve on screen

Mouse interaction

Smooth spring-like movement of the curve

Tangent visualization

Conclusion

This project successfully implements an interactive cubic Bézier curve that behaves like a rope using manually implemented Bézier mathematics, tangent computation, and spring-damping physics.