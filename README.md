🏎️ Racing Performance Analyzer

Elevator Pitch

Analyze racing performance from CSV files with interactive charts and performance summaries — fast, simple, and visual.


---

About the Project

Inspiration

I wanted to create a tool to quickly analyze racing data, visualize trends, and identify performance insights without manually crunching numbers. This project was inspired by a desire to combine data analysis with web development.

What It Does

Upload a CSV file with lap times, speeds, or other performance metrics.

Automatically calculate Average, Max, and Min speeds.

Display the data in an interactive table.

Optionally, visualize trends with charts (future improvement).

Deploys automatically to GitHub Pages on every update.


How I Built It

Frontend: React + Vite for fast, modern development.

CSV Parsing: PapaParse to handle CSV uploads.

Charts: Recharts (planned for visualization).

Deployment: GitHub Actions with peaceiris/actions-gh-pages for automatic deployment.

CI/CD: Automatic builds and deployment whenever main is updated.


Challenges We Ran Into

Handling NaN/Infinity values from CSV parsing.

Resolving Git conflicts during initial setup and CI/CD integration.

Making the GitHub Actions workflow safe so it doesn’t delete itself.


Accomplishments We're Proud Of

Fully functional web app that parses CSV and calculates performance metrics.

Automatic deployment to GitHub Pages.

Robust handling of CSV files with inconsistent data.


What We Learned

Working with CSV parsing in JavaScript and handling edge cases.

Setting up CI/CD pipelines with GitHub Actions.

Managing Git conflicts, rebases, and branch deployment workflows.



---

Open Source Credits

This project uses the following open-source software:

React – Frontend library.

Vite – Frontend build tool.

PapaParse – CSV parsing library.

Recharts – Charting library for React.

gh-pages – Deploy static sites to GitHub Pages.


All open-source libraries were used to enhance functionality, while the core Racing Performance Analyzer was developed independently.


---

How to Use

1. Clone or open the repository in VSCode.


2. Install dependencies:



npm install

3. Run the development server:



npm run dev

4. Open your browser at http://localhost:5173.


5. Upload your CSV file to see performance summaries.




---

Deployment

The app is automatically deployed to GitHub Pages via GitHub Actions on every push to main.

Visit the live app:
https://inajmudinov.github.io/racing-performance-analyzer/


---

Contribution

Feel free to open issues or submit pull requests. Suggestions for charts, filters, or additional metrics are welcome!