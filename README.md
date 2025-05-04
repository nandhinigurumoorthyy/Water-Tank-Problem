# Water Tank Problem

## Problem Description

Given an array `n` (with values always greater than -1) representing block heights, compute the units of water stored between the blocks.

## Example Input

```javascript
[0, 4, 0, 0, 0, 6, 0, 6, 4, 0]
```

## Expected Output

* Visual display of blocks and trapped water.
* Display of total water units stored.

## Hints

* Use SVG graphics (preferred) or HTML Canvas/Table View to generate the graphical visualization.
* Highlight:

  * **Yellow** for blocks (bricks).
  * **Blue** for trapped water.
* Show the total units of water trapped numerically.

## Solution

We built a **responsive** web application using **Vanilla JavaScript**, **HTML**, and **CSS** to:

* Visually represent the blocks and trapped water.
* Dynamically draw the water tank using **Chart.js** (stacked bar chart).
* Color code:

  * **Yellow** = Bricks.
  * **Blue** = Water.
* Provide real-time calculation of the total trapped water.

## Features

* **Responsive Layout**: Works perfectly on all screen sizes (desktop, tablet, mobile).
* **Dynamic Input**: Users can enter their own array of block heights.
* **Stacked Bar Chart**: Separates and displays blocks and trapped water clearly.
* **Real-time Calculation**: Instantly shows the total trapped water.

## Technologies Used

* HTML5
* CSS3 (with responsive design)
* JavaScript (Vanilla)
* Chart.js (for chart visualization)

## Live Demo
### 🌐 View Project Live:
https://water-tank-graph-problem.netlify.app/

## How to Run Locally

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Enter the block heights (comma-separated) in the input field.
4. Click the **Get Started** button to visualize the result.

## Folder Structure

```
Water-Tank-Problem/
  ├── index.html
  ├── styles.css
  ├── index.js
  └── README.md
```

## Notes

* No external libraries used except **Chart.js**.
* Fully responsive — optimized for mobile and desktop screens.
