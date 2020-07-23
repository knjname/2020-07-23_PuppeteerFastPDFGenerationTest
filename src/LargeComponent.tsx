import React from "react";

export const LargeComponent: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div>
      <style>font-size: 8pt;</style>
      <h1>Hello, PDF!!!! @ {id}</h1>
      <table>
        {[...Array(200)].map((_, it) => (
          <tr key={it}>
            {[...Array(20)].map((_, col) => (
              <td style={{ border: "1px solid #000" }} key={col}>
                <span style={{ visibility: "hidden" }}>POS</span> {it * col}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
