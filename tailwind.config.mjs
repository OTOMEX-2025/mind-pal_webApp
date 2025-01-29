/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        softBlue: "#AEC6CF",
        skyBlue: "#87CEEB",
        paleTurquoise: "#AFEEEE",
        powderBlue: "#80E0E6",
        lavenderBlue: "#CCCCFF",
        mintGreen: "#98FF98",
        teaGreen: "#D0F0C0",
        sageGreen: "#9CBA7F",
        paleGreen: "#98FB98",
        peach: "#FFDAB9",
        champagne: "#F7E7CE",
        warmBeige: "#F5F5DC",
        blushPink: "#FFB6C1",
        lavender: "#E6E6FA",
        lightGray: "#D3D3D3",
        pastelPurple: "#D8BFD8",
        mistyRose: "#FFE4E1",

        // Dark Mode Colors (Stress-Relieving)
        deepIndigo: "#4B0082", // Deep calming blue
        midnightBlue: "#191970", // Relaxing dark blue
        darkTeal: "#014F43", // Balancing dark greenish-blue
        mutedOlive: "#556B2F", // Earthy tone for stability
        deepForest: "#183D3D", // Grounding deep green
        twilightPurple: "#301934", // Soft, relaxing purple
        slateGray: "#2F4F4F", // Muted gray-blue
        warmCharcoal: "#3C3C3C", // Gentle dark gray
        deepTaupe: "#4E4B4B", // Calming neutral tone
        darkLavender: "#483D8B", // Soft muted purple for relaxation
      },
    },
  },
  plugins: [],
};
