/**
 * Measurement table for a case study.
 *
 * The first column is treated as the row label. `highlightColumn` (optional)
 * picks one column to emphasise, typically the result being argued for.
 */
const ResultsTable = ({ columns, rows, note, highlightColumn }) => {
  const cellClass = (columnIndex) => {
    if (columnIndex === 0) return "font-medium text-ink";
    if (columnIndex === highlightColumn) return "font-mono text-[13px] text-accent-2";
    return "font-mono text-[13px] text-dim";
  };

  return (
    <>
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-line bg-surface/60">
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="hud-label px-4 py-3 !text-[10.5px] font-normal text-faint"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-line last:border-b-0">
                {row.map((cell, i) => (
                  <td key={i} className={`px-4 py-3 text-[14px] ${cellClass(i)}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 max-w-3xl text-[13px] leading-[21px] text-faint">{note}</p>}
    </>
  );
};

export default ResultsTable;
