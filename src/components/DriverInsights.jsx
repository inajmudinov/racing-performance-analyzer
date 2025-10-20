import React, { useState } from "react";

export default function DriverInsights({ performanceData }) {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRecommendation = async () => {
    setLoading(true);
    try {
      const response = await fetch("https:racing-ai-backend.onrender.com/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(performanceData),
      });

      const data = await response.json();
      setRecommendation(`${data.recommendation} (${data.source})`);
    } catch (err) {
      console.error(err);
      setRecommendation("Failed to fetch recommendation. Try again later.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h3>Performance Insights</h3>
      <button onClick={getRecommendation} disabled={loading}>
        {loading ? "Loading..." : "Get AI Recommendation"}
      </button>
      {recommendation && <p><strong>Tip:</strong> {recommendation}</p>}
    </div>
  );
}
