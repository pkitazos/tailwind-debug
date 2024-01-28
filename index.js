import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      ["--"]: (value) => ({
        outline: "2px solid",
        outlineColor: value,
      }),
    },
    { values: flattenColorPalette(theme("colors")), type: "color" }
  );
});
